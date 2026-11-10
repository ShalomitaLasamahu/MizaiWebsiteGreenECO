import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { CameraView, ResultBox, LoadingOverlay } from "./index";

export default function Scanner() {
    const [data, setData] = useState("Belum ada hasil scan");
    const [loading, setLoading] = useState(false);
    const [isCameraOpen, setIsCameraOpen] = useState(false); // kamera default tertutup

    return (
        <div className="scanner-container">
            {/* Tombol untuk buka kamera */}
            {!isCameraOpen && (
                <button
                    onClick={() => setIsCameraOpen(true)}
                    className="btn-open-camera"
                >
                    Buka Kamera
                </button>
            )}

            {/* Komponen Kamera (hanya muncul kalau kamera dibuka) */}
            {isCameraOpen && (
                <CameraView>
                    <QrReader
                        constraints={{ facingMode: "environment" }} // kamera belakang
                        onResult={(result, error) => {
                            if (!!result) {
                                setLoading(true);
                                setTimeout(() => {
                                    setData(result?.text || "Tidak terbaca");
                                    setLoading(false);
                                }, 500);
                            }
                            if (!!error) {
                                console.info(error);
                            }
                        }}
                        style={{ width: "100%" }}
                    />
                </CameraView>
            )}

            {/* Loading Overlay */}
            {loading && <LoadingOverlay />}

            {/* Hasil Scan */}
            <ResultBox text={data} />
        </div>
    );
}
