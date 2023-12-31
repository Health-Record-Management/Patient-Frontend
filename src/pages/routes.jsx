import { createBrowserRouter } from "react-router-dom";
import Homepage from './homepage'
import ErrorPage from "./ErrorPage";
import PatientInfo from "./PatientInfo";
import PatientProfile from "./PatientInfo/Profile";
import PatientRegistration from "./PatientInfo/Registration";
import ViewRecordPatient from './PatientInfo/viewRecord.tsx';
import ViewDoctorPatient from './PatientInfo/ViewDoctor';
import PatientLogin from "./Auth/PatientLogin";
import PatientSignup from "./Auth/PatientSignup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,

    },
    {
        path: "/patient-login",
        element: <PatientLogin />
    },
    {
        path: "/patient-signup",
        element: <PatientSignup />
    },
    {
        path: "/patientinfo/",
        element: <PatientInfo />,
        children: [{
            path: "",
            element: <PatientProfile />,
        }, {
            path: "update/",
            element: <PatientRegistration />
        }, {
            path: "viewrecord/",
            element: <ViewRecordPatient />
        }, {
            path: "viewdoctor/",
            element: <ViewDoctorPatient />
        }]
    },



]);

export default router;
