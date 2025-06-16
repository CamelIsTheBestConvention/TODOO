import { TodoTableType } from "@/types/DBType";
import { useMemo, useState } from "react";
import { Dimensions, LogBox, Text, View } from "react-native";
import * as Victory from "victory-native";
import {
  VictoryAxis,
  VictoryChart,
  VictoryContainer,
  VictoryLine,
  VictoryScatter,
  VictoryTheme,
} from "victory-native";
import BoxBg from "../common/BoxBg";

/* istanbul ignore next */
try {
  const primitives = Victory as unknown as {
    Point?: { defaultProps?: Record<string, unknown> };
    LineSegment?: { defaultProps?: Record<string, unknown> };
  };

  if (primitives.Point?.defaultProps) {
    delete primitives.Point.defaultProps;
  }
  if (primitives.LineSegment?.defaultProps) {
    delete primitives.LineSegment.defaultProps;
  }
} catch {}
/* istanbul ignore next */
LogBox?.ignoreLogs?.(["Support for defaultProps will be removed"]);

interface TodoChartProps {
  todoList: TodoTableType[] | null;
}

const screenWidth = Dimensions.get("window").width;

const TodoChart = ({ todoList }: TodoChartProps) => {
  const [chartWidth, setChartWidth] = useState<number>(screenWidth);

  const weeklyData = useMemo(() => {
    const data = [0, 0, 0, 0, 0, 0, 0];

    const now = new Date();
    const offsetMs = now.getTimezoneOffset() * 60_000;
    const todayLocal = new Date(now.getTime() - offsetMs);
    /* istanbul ignore next */
    todayLocal.setHours(0, 0, 0, 0);
    const diffToMonday = ((todayLocal.getDay() + 6) % 7) * -1;
    const mondayLocal = new Date(todayLocal);
    mondayLocal.setDate(todayLocal.getDate() + diffToMonday);

    if (todoList) {
      todoList.forEach((todo) => {
        if (!todo.created_at || todo.is_done !== true) return;

        // 1) UTC 문자열 → Date
        const dateUtc = new Date(todo.created_at);
        // 2) UTC→로컬(서울)으로 보정
        const dateLocal = new Date(dateUtc.getTime() - offsetMs);
        // 3) 자정 기준 그룹핑
        dateLocal.setHours(0, 0, 0, 0);

        if (dateLocal >= mondayLocal && dateLocal <= todayLocal) {
          const day = dateLocal.getDay();
          const mappedIndex = (day + 6) % 7; // 월=0,...,일=6
          data[mappedIndex]++;
        }
      });
    }

    return data;
  }, [todoList]);

  const chartData = weeklyData.map((y, i) => ({ x: i, y }));
  const maxValue = Math.max(...weeklyData, 5);
  const yMax = Math.ceil(maxValue / 5) * 5;

  const tickValues = [];
  for (let i = 0; i <= yMax; i += yMax > 10 ? 2 : 1) {
    tickValues.push(i);
  }

  return (
    <BoxBg>
      <View
        className="justify-between py-2 px-4"
        testID="chart-container"
        onLayout={(event) => {
          const { width } = event.nativeEvent.layout;
          setChartWidth(width);
        }}
      >
        <Text className="text-xl font-bold mr-2">주간 완료 횟수</Text>
        <View
          style={{
            backgroundColor: "#ffffff",
            borderRadius: 12,
            padding: 12,
            marginTop: 8,
          }}
        >
          <VictoryChart
            containerComponent={<VictoryContainer />}
            width={chartWidth - 32}
            height={200}
            padding={{ top: 10, bottom: 30, left: 30, right: 10 }}
            domainPadding={{ x: 30, y: [10, 20] }}
            theme={VictoryTheme.material}
            domain={{ y: [0, yMax] }}
          >
            <VictoryAxis
              tickValues={[0, 1, 2, 3, 4, 5, 6]}
              tickFormat={["월", "화", "수", "목", "금", "토", "일"]}
              style={{
                tickLabels: { fontSize: 16, fill: "#000" },
                grid: { stroke: "#d9d9d9" },
              }}
            />
            <VictoryAxis
              dependentAxis
              tickValues={tickValues}
              style={{
                tickLabels: { fontSize: 14, fill: "#000" },
                grid: { stroke: "#d9d9d9" },
              }}
            />
            <VictoryLine
              interpolation="monotoneX"
              data={chartData}
              animate={{
                duration: 1000,
                easing: "quadInOut",
                onLoad: { duration: 1000 },
              }}
              style={{
                data: {
                  stroke: "#FF5722",
                  strokeWidth: 3,
                },
              }}
            />
            <VictoryScatter
              data={chartData}
              animate={{
                duration: 1000,
                onLoad: { duration: 1000 },
              }}
              size={5}
              style={{
                data: {
                  fill: "#FF5722",
                  stroke: "#fff",
                  strokeWidth: 2,
                },
              }}
            />
          </VictoryChart>
        </View>
      </View>
    </BoxBg>
  );
};

export default TodoChart;
