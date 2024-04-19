import { useState } from "react";
import { Card, CardProps } from "./components/Card";
import { useCards } from "./utils/useCards";

const App = () => {
  const {
    player1Cards,
    computerCards,
    updateComputerCards,
    updatePlayer1Cards,
  } = useCards();
  const [selectedCards, setSelectedCards] = useState<CardProps[]>([]);
  const [player1Score, setPlayer1Score] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [showComputerFace, setShowComputerFace] = useState(false);
  const [cardSelected, setCardSelected] = useState(false);

  console.log(selectedCards);

  const handleCardClick = (index: number) => {
    // here i want to remove the index card from the player1Cards array and computerCards array and it to new state called selectedCards
	setShowComputerFace(false)
    const selectedCards = [player1Cards[index], computerCards[index]];
    setSelectedCards(selectedCards);
	setCardSelected(true);

    updateComputerCards(index);
    updatePlayer1Cards(index);
  };

  const handlePowerClick = () => {
    // here i want to compare the power of the selected cards and add the score to the player with the highest power
    const playerPower = selectedCards[0].power ? selectedCards[0].power : 0;
    const computerPower = selectedCards[1].power ? selectedCards[1].power : 0;
    if (playerPower > computerPower) {
      setPlayer1Score(player1Score + 2);
    } else if (playerPower < computerPower) {
      setComputerScore(computerScore + 2);
    } else {
      setPlayer1Score(player1Score + 1);
      setComputerScore(computerScore + 1);
    }
	if(player1Cards.length === 0) {
		alert("Game Over!");
		if(player1Score > computerScore) {
			alert("Player Wins!");
		} else if(player1Score < computerScore) {
			alert("Computer Wins!");
		} else {
			alert("It's a draw!");
		}
		setSelectedCards([]);
		window.location.reload();
	} else {
		setShowComputerFace(true)
		setCardSelected(false);
	}
  };

  const handleRankClick = () => {
    // here i want to compare the rank of the selected cards and add the score to the player with the highest rank
    const playerRank = selectedCards[0].rank ? selectedCards[0].rank : 0;
    const computerRank = selectedCards[1].rank ? selectedCards[1].rank : 0;
    if (playerRank < computerRank) {
      setPlayer1Score(player1Score + 2);
    } else if (playerRank > computerRank) {
      setComputerScore(computerScore + 2);
    }else {
		setPlayer1Score(player1Score + 1);
		setComputerScore(computerScore + 1);
	}
	
	if(player1Cards.length === 0) {
		alert("Game Over!");
		if(player1Score > computerScore) {
			alert("Player Wins!");
		} else if(player1Score < computerScore) {
			alert("Computer Wins!");
		} else {
			alert("It's a draw!");
		}
		setSelectedCards([]);
		window.location.reload();
	} else {
		setShowComputerFace(true)
		setCardSelected(false);
	}
  };
  const handleSpeedClick = () => {
    // here i want to compare the speed of the selected cards and add the score to the player with the highest speed
    const playerSpeed = selectedCards[0].speed ? selectedCards[0].speed : 0;
    const computerSpeed = selectedCards[1].speed ? selectedCards[1].speed : 0;
    if (playerSpeed > computerSpeed) {
      setPlayer1Score(player1Score + 2);
    } else if (playerSpeed < computerSpeed) {
      setComputerScore(computerScore + 2);
    }else {
		setPlayer1Score(player1Score + 1);
		setComputerScore(computerScore + 1);
	}
	
	if(player1Cards.length === 0) {
		alert("Game Over!");
		if(player1Score > computerScore) {
			alert("Player Wins!");
		} else if(player1Score < computerScore) {
			alert("Computer Wins!");
		} else {
			alert("It's a draw!");
		}
		setSelectedCards([]);
		window.location.reload();
	} else {
		setShowComputerFace(true)
		setCardSelected(false);
	}
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-8 mt-4">POKEMON CARD GAME</h1>
      <div className="flex flex-row">
        <div className=" items-center border-t-0 border-b-0 px-2  flex flex-col h-[80vh] border border-r-2  w-1/2 flex-wrap border-gray-300 ">
          <h2 className="text-2xl font-bold text-center mt-5 mb-6">PLAYER</h2>
          <div className="flex flex-row w-full flex-wrap gap-3 items-center justify-center">
            {player1Cards.map((card, index) => (
              <Card
                key={index}
                name={card.name}
                speed={card.speed}
                rank={card.rank}
                power={card.power}
                image={card.image}
                showFace
				disabled={cardSelected}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>
          <h2 className="text-2xl font-bold text-center mt-5 mb-6">COMPUTER</h2>
          <div className="flex w-full flex-wrap flex-row gap-3 items-center justify-center">
            {computerCards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-11 w-1/2 items-center ">
          <div className="text-2xl font-bold text-center mt-5 mb-2">
            PICK A CATEGORY
          </div>
          {selectedCards.map((card, index) => (
			index === 0 ?
            <Card key={index} {...card} showFace disabledCategory={showComputerFace} category onPowerClick={handlePowerClick} onRankClick={handleRankClick} onSpeedClick={handleSpeedClick} />
			: <Card key={index} {...card} showFace={showComputerFace}  />
          ))}
		<div className="flex flex-col gap-5">
			<div className="text-2xl font-bold text-center mt-5 mb-2">
				SCORE
			</div>
			<div className="flex flex-row gap-5">
				<div className="text-2xl font-bold text-center">Player: {player1Score}</div>
				<div className="text-2xl font-bold text-center">Computer: {computerScore}</div>
			</div>
		</div>
        </div>
      </div>
    </>
  );
};

export default App;
