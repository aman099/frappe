import { Chart as ChartJS, defaults, plugins, Tooltip } from "chart.js/auto";
import { Line, Pie } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

// Options Title
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

function ContentCardStatisticsCharts() {
  return (
    <div
      className="chart-container grid grid-cols-2 gap-8 mx-5 py-4
  mb-20"
    >
      <div className="chart">
        <Line
          data={{
            labels: [
              "19-02-2024",
              "20-02-2024",
              "21-02-2024",
              "22-02-2024",
              "23-02-2024",
              "24-02-2024",
              "25-02-2024",
              "26-02-2024",
              "27-02-2024",
              "28-02-2024",
              "29-02-2024",
              "1-03-2024",
              "2-03-2024",
              "3-03-2024",
              "4-03-2024",
              "5-03-2024",
              "6-03-2024",
              "7-03-2024",
              "8-03-2024",
              "9-03-2024",
              "10-03-2024",
              "11-03-2024",
              "12-03-2024",
              "13-03-2024",
              "14-03-2024",
              "15-03-2024",
              "16-03-2024",
              "17-03-2024",
              "18-03-2024",
              "19-03-2024",
              "20-03-2024",
              "21-03-2024",
            ],
            datasets: [
              {
                label: "New Signup",
                data: [
                  66, 57, 36, 48, 36, 18, 23, 51, 43, 61, 62, 53, 35, 32, 69,
                  51, 49, 50, 44, 28, 30, 52, 57, 52, 64, 28, 21, 33, 40, 48,
                  39, 0,
                ],
                borderColor: "#4563F1",
                borderWidth: 2,
                backgroundColor: "transparent",
                pointRadius: 0,
              },
            ],
          }}
          options={{
            scales: {
              x: {
                ticks: {
                  maxTicksLimit: 6,
                },
              },
              y: {
                ticks: {
                  maxTicksLimit: 6,
                },
              },
            },
            plugins: {
              legend: {
                labels: {
                  boxWidth: 0,
                },
              },
              title: {
                text: "New Signups",
              },
            },
          }}
        />
      </div>
      <div className="chart">
        <Line
          data={{
            labels: [
              "19-02-2024",
              "20-02-2024",
              "21-02-2024",
              "22-02-2024",
              "23-02-2024",
              "24-02-2024",
              "25-02-2024",
              "26-02-2024",
              "27-02-2024",
              "28-02-2024",
              "29-02-2024",
              "1-03-2024",
              "2-03-2024",
              "3-03-2024",
              "4-03-2024",
              "5-03-2024",
              "6-03-2024",
              "7-03-2024",
              "8-03-2024",
              "9-03-2024",
              "10-03-2024",
              "11-03-2024",
              "12-03-2024",
              "13-03-2024",
              "14-03-2024",
              "15-03-2024",
              "16-03-2024",
              "17-03-2024",
              "18-03-2024",
              "19-03-2024",
              "20-03-2024",
              "21-03-2024",
            ],
            datasets: [
              {
                label: "Course Enrollments",
                data: [
                  110, 114, 61, 84, 72, 48, 52, 114, 128, 104, 128, 116, 58, 49,
                  105, 74, 97, 94, 84, 61, 54, 126, 127, 132, 114, 75, 42, 54,
                  93, 99, 140, 0,
                ],
                borderColor: "#4563F1",
                borderWidth: 2,
                backgroundColor: "transparent",
                pointRadius: 0,
              },
            ],
          }}
          options={{
            scales: {
              x: {
                ticks: {
                  maxTicksLimit: 6,
                },
              },
              y: {
                ticks: {
                  maxTicksLimit: 6,
                },
              },
            },
            plugins: {
              legend: {
                labels: {
                  boxWidth: 0,
                },
              },
              title: {
                text: "Course Enrollments",
              },
            },
          }}
        />
      </div>
      <div className="chart">
        <Line
          data={{
            labels: [
              "19-02-2024",
              "20-02-2024",
              "21-02-2024",
              "22-02-2024",
              "23-02-2024",
              "24-02-2024",
              "25-02-2024",
              "26-02-2024",
              "27-02-2024",
              "28-02-2024",
              "29-02-2024",
              "1-03-2024",
              "2-03-2024",
              "3-03-2024",
              "4-03-2024",
              "5-03-2024",
              "6-03-2024",
              "7-03-2024",
              "8-03-2024",
              "9-03-2024",
              "10-03-2024",
              "11-03-2024",
              "12-03-2024",
              "13-03-2024",
              "14-03-2024",
              "15-03-2024",
              "16-03-2024",
              "17-03-2024",
              "18-03-2024",
              "19-03-2024",
              "20-03-2024",
              "21-03-2024",
            ],
            datasets: [
              {
                label: "New Signup",
                data: [
                  394, 483, 250, 323, 296, 190, 205, 366, 262, 371, 425, 382,
                  254, 133, 375, 252, 290, 425, 333, 320, 216, 384, 408, 406,
                  466, 332, 182, 282, 408, 378, 357, 0,
                ],
                borderColor: "#4563F1",
                borderWidth: 2,
                backgroundColor: "transparent",
                pointRadius: 0,
              },
            ],
          }}
          options={{
            scales: {
              x: {
                ticks: {
                  maxTicksLimit: 6,
                },
              },
              y: {
                ticks: {
                  maxTicksLimit: 6,
                },
              },
            },
            plugins: {
              legend: {
                labels: {
                  boxWidth: 0,
                },
              },
              title: {
                text: "Lesson Completion",
              },
            },
          }}
        />
      </div>
      <div className="chart p-7">
        <Pie
          data={{
            labels: ["Completed", "In Progress"],
            datasets: [
              {
                data: [82.1, 17.9],
                backgroundColor: ["pink", "blue"],
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                labels: {
                  boxWidth: 16,
                  borderRadius: 1,
                  padding: 30,
                  textAlign: "right",
                },
              },
              title: {
                text: "Course Completion",
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default ContentCardStatisticsCharts;
