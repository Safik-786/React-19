import React from "react";
import Modal from "./Modal";
import Form from "../ApiHandling/components/Form";

function UseModal() {

    const [open, setOpen] = React.useState(false);

    return (

        <div className="">

            <h1>Main UseModal</h1>

            <button onClick={() => setOpen(true)}>Open Modal</button>

            {open && (

                <Modal>
                    <div className="relative">
                        {/* <h2>Book Details</h2>   */}
                        <Form />

                        <button className="absolute top-0 right-0" onClick={() => setOpen(false)}>Close</button>
                    </div>

                </Modal>

            )}

        </div>

    );

}


export default UseModal