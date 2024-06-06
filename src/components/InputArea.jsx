import "../styles/InputArea.css";

function NameCell({ name }) {
  return (
    <>
      <h2>Name</h2>
      <form>
        <div>
          <label htmlFor="firstName">First name</label>
          <input id="firstName" value={name} />
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <input id="lastName" />
        </div>
      </form>
    </>
  );
}

function EducationCell({ name }) {
  return (
    <>
      <h2>Education</h2>
      <form>
        <div>
          <label htmlFor="degree">Degree Name</label>
          <input id="degree" value={name} />
        </div>
        <div>
          <label htmlFor="university">University Name</label>
          <input id="university" />
        </div>
        <div>
          <label htmlFor="start">Start Date</label>
          <input id="lastName" />
        </div>
        <div>
          <label htmlFor="end">End Date</label>
          <input id="lastName" />
        </div>
      </form>
    </>
  );
}
function ContactCell({ name }) {
  return (
    <>
      <h2>Contact</h2>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" value={name} />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input id="phone" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input id="address" />
        </div>
        <div>
          <label htmlFor="linkedin">Linkedin</label>
          <input id="linkedin" />
        </div>
        <div>
          <label htmlFor="github">Github</label>
          <input id="github" />
        </div>
      </form>
    </>
  );
}

function ExperienceCell({ name }) {
  return (
    <>
      <h2>Experience</h2>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" value={name} />
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <input id="company" />
        </div>
        <div>
          <label htmlFor="start">Start Date</label>
          <input id="start" />
        </div>
        <div>
          <label htmlFor="end">End Date</label>
          <input id="end" />
        </div>
        <div>
          <label htmlFor="github">Description</label>
          <input id="github" />
        </div>
      </form>
    </>
  );
}
export default function InputArea() {
  return (
    <div id="input-area">
      <h1>This is input</h1>
      <div id="name-cell">
        <NameCell name={"Alex"} />
      </div>
      <div id="education-cell">
        <EducationCell name={"Alex"} />
      </div>
      <div id="contact-cell">
        <ContactCell />
      </div>
      <div id="experience-cell">
        <ExperienceCell />
      </div>
    </div>
  );
}
