import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const mathMarkData = [
        { "student": "Student 1", "math": 78, "chemistry": 82, "physics": 74 },
        { "student": "Student 2", "math": 85, "chemistry": 79, "physics": 88 },
        { "student": "Student 3", "math": 92, "chemistry": 94, "physics": 90 },
        { "student": "Student 4", "math": 68, "chemistry": 73, "physics": 70 },
        { "student": "Student 5", "math": 74, "chemistry": 78, "physics": 76 },
        { "student": "Student 6", "math": 88, "chemistry": 86, "physics": 84 },
        { "student": "Student 7", "math": 91, "chemistry": 89, "physics": 92 },
        { "student": "Student 8", "math": 83, "chemistry": 85, "physics": 80 },
        { "student": "Student 9", "math": 79, "chemistry": 81, "physics": 78 },
        { "student": "Student 10", "math": 95, "chemistry": 92, "physics": 96 }
      ];

    return (
        <div>
            <LChart width={600} height={400} data={mathMarkData}>
                <XAxis dataKey="student"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="chemistry" stroke='yellow'></Line>
                <Line dataKey="physics" stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;