import { useSelector } from "react-redux";
import { selectTables } from "../../../redux/tablesRedux";
import { Button, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const AllTables = () => {
    const statusInfo = useSelector(selectTables);

    return (
        <div>
            {statusInfo.map(({ id, status }) => (
                <div key={id}>
                    <Stack direction="horizontal" gap={5} style={{ marginTop: "25px", marginBottom: "18px" }}>
                        <h3>Table {id}</h3>
                        <p className="me-auto" style={{ marginTop: "16px" }}>
                            <b>Status:</b> {status}
                        </p>
                        <Button variant="primary" as={NavLink} to={`table/${id}`} style={{ marginRight: "5px" }}>Show more</Button>
                    </Stack>
                    <hr />
                </div>
            ))}
        </div>
    )
};

export default AllTables;
