import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!firstName) {
      alert("FirstName is Important");
      return;
    }

    onAdd({ firstName, lastName, reminder });

    setFirstName("");
    setLastName("");
    setReminder(false);
  };

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col justify-center items-center text-center bg-yellow-400">
        <div className="flex flex-col p-2">
          <label className="font-bold text-yellow-100">First Name</label>
          <input
            className="px-6 py-2"
            type="text"
            placeholder="Enter First Name"
            value={firstName}
            onChange={handleChangeFirstName}
          />
        </div>
        <div className="flex flex-col p-2">
          <label className="font-bold text-yellow-100">Last Name</label>
          <input
            className="px-6 py-2"
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={handleChangeLastName}
          />
        </div>
        <div className="flex justify-between p-2">
          <label className="pr-6">Set Reminder</label>
          <input
            className="mt-2 ml-4"
            type="checkBox"
            value={reminder}
            checked={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <button className="bg-blue-200 p-2 rounded-xl m-2">Save Task</button>
      </div>
    </form>
  );
};

export default AddTask;
