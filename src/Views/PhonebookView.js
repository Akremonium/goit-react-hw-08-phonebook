import ContactForm from "../Components/ContatctForm";
import ContactList from "../Components/ContactList";
import Filter from "../Components/Filter";
import Container from "../Components/Container";
import Section from "../Components/Section";

const PhonebookView = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <div className="wrapper">
        <Section title="Add contact">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </div>
    </Container>
  );
};
export default PhonebookView;
