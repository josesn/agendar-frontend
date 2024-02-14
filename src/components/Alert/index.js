import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


export default function Alert() {
    return(
        <>
          <ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
        </>
    )
};