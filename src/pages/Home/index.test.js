import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";
import PeopleCard from "../../components/PeopleCard";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});

describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    render(<Home />);

    const services = screen.getByTestId("nos-services");
    expect(services).toBeInTheDocument();

    const realisations = screen.getByTestId("nos-realisations");
    expect(realisations).toBeInTheDocument();

    const equipe = screen.getByTestId("notre-equipe");
    expect(equipe).toBeInTheDocument();
  });

  it("a list a people is displayed", () => {
    render(<Home />);
    <PeopleCard imageSrc="/images/" name="name" position="position" />;
  });

  it("a footer is displayed", () => {
    render(<Home />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });

  it("an event card, with the last event, is displayed", () => {
    render(<Home />);
    screen.debug();
    const eventTitle = screen.queryByText(/Notre dernière prestation/i);
    const eventFallback = screen.queryByText(
      /Aucun événement disponible pour le moment/i
    );
    expect(eventTitle).toBeInTheDocument();
    if (!eventTitle) {
      expect(eventFallback).toBeInTheDocument();
    }
  });
});
