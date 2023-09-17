'use client'
import Modal from "react-modal";
import { useState } from "react";
import ReactPlayer from "react-player";
import { Button } from "@/components/ui/button";

export default function ShowTrailer({ getTrailer }: { getTrailer: string }) {
    const [showModal, setShowModal] = useState(false);

    const toggleShowModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <Button variant={"outline"} className="my-3 bg-transparent font-semibold" onClick={() => toggleShowModal()}> Ver Trailer </Button>
            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                contentLabel='Video Modal'
                style={{
                    overlay: {
                        backgroundColor: "rgba(0,0,0,0.2)",
                    },
                    content: {
                        width: "75vw",
                        height: "75vh",
                        margin: "auto",
                        padding: "0px",
                        border: "none",
                        overflow: "hidden",
                    },
                }}
            >
                {showModal &&
                    <div>
                        <ReactPlayer
                            url={getTrailer}
                            height='75vh'
                            width='75vw'
                            controls={true}
                            className="bg-dark overflow-hidden"
                        />
                    </div>
                }
            </Modal>
        </>
    )
}