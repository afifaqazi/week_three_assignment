const obj = [
    { name: "Ali", marks: 78 },
    { name: "Ahmed", marks: 32 },
    { name: "Tooba", marks: 53 }
];

export default function ResultList() {
    return (
        
        <div>
            <h3>Results</h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Marks</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {obj.map((student, idx) => (
                        <tr key={idx}>
                            <td>{student.name}</td>
                            <td>{student.marks}</td>
                            <td style={{ color: student.marks > 50 ? "green" : "red" }}
                                >{student.marks > 40 ? "Pass" : "Fail"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}