import PropTypes from "prop-types";
import "../styles/InputArea.css";

function NameCell({ name, handleChange }) {
  return (
    <>
      <h2>Name</h2>
      <form>
        <div>
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            value={name.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            value={name.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
          />
        </div>
      </form>
    </>
  );
}

NameCell.propTypes = {
  name: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

function EducationCell({ education, handleChange }) {
  return (
    <>
      <h2>Education</h2>
      <form>
        <div>
          <label htmlFor="degree">Degree Name</label>
          <input
            id="degree"
            value={education.degree}
            onChange={(e) => handleChange("degree", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="university">University Name</label>
          <input
            id="university"
            value={education.university}
            onChange={(e) => handleChange("university", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="start">Start Date</label>
          <input
            id="start"
            value={education.start}
            onChange={(e) => handleChange("educationStart", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="end">End Date</label>
          <input
            id="end"
            value={education.end}
            onChange={(e) => handleChange("educationEnd", e.target.value)}
          />
        </div>
      </form>
    </>
  );
}

EducationCell.propTypes = {
  education: PropTypes.shape({
    degree: PropTypes.string,
    university: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

function ContactCell({ contact, handleChange }) {
  return (
    <>
      <h2>Contact</h2>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            value={contact.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            value={contact.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            value={contact.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="linkedin">LinkedIn</label>
          <input
            id="linkedin"
            value={contact.linkedin}
            onChange={(e) => handleChange("linkedin", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="github">Github</label>
          <input
            id="github"
            value={contact.github}
            onChange={(e) => handleChange("github", e.target.value)}
          />
        </div>
      </form>
    </>
  );
}

ContactCell.propTypes = {
  contact: PropTypes.shape({
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

function ExperienceCell({ experience, handleChange }) {
  return (
    <>
      <h2>Experience</h2>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            value={experience.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <input
            id="company"
            value={experience.company}
            onChange={(e) => handleChange("company", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="start">Start Date</label>
          <input
            id="start"
            value={experience.start}
            onChange={(e) => handleChange("experienceStart", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="end">End Date</label>
          <input
            id="end"
            value={experience.end}
            onChange={(e) => handleChange("experienceEnd", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            value={experience.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>
      </form>
    </>
  );
}

ExperienceCell.propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string,
    company: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default function InputArea({ formData, handleChange }) {
  return (
    <div id="input-area">
      <h1>This is input</h1>
      <div id="name-cell">
        <NameCell name={formData} handleChange={handleChange} />
      </div>
      <div id="education-cell">
        <EducationCell education={formData} handleChange={handleChange} />
      </div>
      <div id="contact-cell">
        <ContactCell contact={formData} handleChange={handleChange} />
      </div>
      <div id="experience-cell">
        <ExperienceCell experience={formData} handleChange={handleChange} />
      </div>
    </div>
  );
}
