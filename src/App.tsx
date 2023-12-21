import { Navigate, Route, Routes } from "react-router-dom";

import NewNote from "./components/NewNote";

export type Note = { id: string } & NoteData;
export type NoteData = { title: string; markdown: string; tags: Tag[] };
export type Tag = { id: string; label: string };

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/new" element={<NewNote />} />
      <Route path="/:id">
        <Route index element={<h1>Show</h1>} />
        <Route path="edit" element={<h1>edit</h1>} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
