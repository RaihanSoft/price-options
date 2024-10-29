import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const LIneChart = () => {
    const studentScores = [
        { id: 1, name: "Alice", mathMarks: 78, physicsMarks: 82, chemistryMarks: 76 },
        { id: 2, name: "Bob", mathMarks: 85, physicsMarks: 75, chemistryMarks: 89 },
        { id: 3, name: "Charlie", mathMarks: 92, physicsMarks: 91, chemistryMarks: 88 },
        { id: 4, name: "David", mathMarks: 68, physicsMarks: 79, chemistryMarks: 72 },
        { id: 5, name: "Eva", mathMarks: 74, physicsMarks: 84, chemistryMarks: 77 },
        { id: 6, name: "Frank", mathMarks: 88, physicsMarks: 87, chemistryMarks: 85 },
        { id: 7, name: "Grace", mathMarks: 95, physicsMarks: 90, chemistryMarks: 92 },
        { id: 8, name: "Henry", mathMarks: 80, physicsMarks: 83, chemistryMarks: 78 },
        { id: 9, name: "Ivy", mathMarks: 90, physicsMarks: 88, chemistryMarks: 84 },
        { id: 10, name: "Jack", mathMarks: 76, physicsMarks: 77, chemistryMarks: 79 }
    ];

    return (
        <div>


            <LineChart


                width={800} height={400} data={studentScores}>
                <YAxis dataKey={name} />
                <XAxis />
                <Line dataKey='mathMarks' stroke="yellow" />
                <Line dataKey='physicsMarks' stroke="green" />
                <Line dataKey='chemistryMarks' stroke="red" />
            </LineChart>

            <BarChart
                width={800} height={400} data={studentScores}>
                <YAxis dataKey={name} />
                <XAxis />
                <Bar dataKey='mathMarks' stroke="yellow" />
                <Bar dataKey='physicsMarks' stroke="green" />
                <Bar dataKey='chemistryMarks' stroke="red" />
            </BarChart>




        </div >
    )
}

export default LIneChart
