import { useRef, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";
import { NoteData, Tag } from "../App";
type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
};
function NoteForm({ onSubmit }: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const markDownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTag, setSelectedTag] = useState<Tag[]>([]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit({
      title: titleRef.current!.value,
      markdown: markDownRef.current!.value,
      tags: [],
    });
  }
  return (
    <>
      <form className=" bg-slate-300" onSubmit={handleSubmit}>
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col">
            <label>Title</label>
            <input ref={titleRef} required />
          </div>
          <div>
            <label>Tags</label>
            <CreatableReactSelect
              value={selectedTag.map((tag) => {
                return { label: tag.label, value: tag.id };
              })}
              onChange={(tags) => {
                setSelectedTag(
                  tags.map((tag) => {
                    return { label: tag.label, id: tag.value };
                  })
                );
              }}
              isMulti
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label>Body</label>
          <textarea rows={15} ref={markDownRef} required></textarea>
        </div>
        <div>
          <button type="submit">Save</button>
          <Link to="..">
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </>
  );
}

export default NoteForm;
