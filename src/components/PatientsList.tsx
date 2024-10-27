import { usePatientStore } from "../store";
import PatientDetails from "./PatientDetails";

export default function PatientsList() {
  const patients = usePatientStore((state) => state.patients);

  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center text-gray-800">
            Patient List
          </h2>
          <p className="text-xl mt-5 mb-10 text-center text-gray-600">
            Manage your {""}
            <span className="text-gray-800 font-bold">
              Patients and Appointments
            </span>
          </p>
          {patients.map((patient) => (
            <PatientDetails key={patient.id} patient={patient} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center text-gray-800">
            No Patients
          </h2>
          <p className="text-xl mt-5 mb-10 text-center text-gray-600">
            Start by adding patients {""}
            <span className="text-gray-800 font-bold">
              and they will appear here
            </span>
          </p>
        </>
      )}
    </div>
  );
}
