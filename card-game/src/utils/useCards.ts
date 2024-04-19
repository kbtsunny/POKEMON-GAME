import { useEffect, useState } from "react";
import { CardProps } from "../components/Card";
import allCards from "./cards.json"

export const useCards = () => {
	const [cards, setCards] = useState<CardProps[]>([]);
	const [player1Cards, setPlayer1Cards] = useState<CardProps[]>([]);
	const [computerCards, setComputerCards] = useState<CardProps[]>([]);
  
	useEffect(() => { // Load cards from JSON file

	// Shuffle cards
	const shuffledCards = allCards.sort(() => Math.random() - 0.5);

	// Distribute cards
	setPlayer1Cards(shuffledCards.slice(0, 5));
	setComputerCards(shuffledCards.slice(5, 10));
	setCards(shuffledCards.slice(10)); // Remaining cards after distribution
	}, []);
	
	const updatePlayer1Cards = (index: number) => {
		const newPlayer1Cards = [...player1Cards];
		newPlayer1Cards.splice(index, 1);
		setPlayer1Cards(newPlayer1Cards);
	};

	const updateComputerCards = (index: number) => {
		const newComputerCards = [...computerCards];
		newComputerCards.splice(index, 1);
		setComputerCards(newComputerCards);
	};
	
	return { cards, player1Cards, computerCards, updatePlayer1Cards, updateComputerCards};
  };