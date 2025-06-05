// StarBackground.jsx
import { useEffect, useState } from "react";

// Todas las rotaciones de las piezas de Tetris para simular una partida real
const TETRIS_PIECES = {
  I: [
    {
      shape: [[1, 1, 1, 1]],
      color: "#00f0f0",
    },
    {
      shape: [[1], [1], [1], [1]],
      color: "#00f0f0",
    },
  ],
  O: [
    {
      shape: [
        [1, 1],
        [1, 1],
      ],
      color: "#f0f000",
    },
  ],
  T: [
    {
      shape: [
        [0, 1, 0],
        [1, 1, 1],
      ],
      color: "#a000f0",
    },
    {
      shape: [
        [1, 0],
        [1, 1],
        [1, 0],
      ],
      color: "#a000f0",
    },
    {
      shape: [
        [1, 1, 1],
        [0, 1, 0],
      ],
      color: "#a000f0",
    },
    {
      shape: [
        [0, 1],
        [1, 1],
        [0, 1],
      ],
      color: "#a000f0",
    },
  ],
  S: [
    {
      shape: [
        [0, 1, 1],
        [1, 1, 0],
      ],
      color: "#00f000",
    },
    {
      shape: [
        [1, 0],
        [1, 1],
        [0, 1],
      ],
      color: "#00f000",
    },
  ],
  Z: [
    {
      shape: [
        [1, 1, 0],
        [0, 1, 1],
      ],
      color: "#f00000",
    },
    {
      shape: [
        [0, 1],
        [1, 1],
        [1, 0],
      ],
      color: "#f00000",
    },
  ],
  J: [
    {
      shape: [
        [1, 0, 0],
        [1, 1, 1],
      ],
      color: "#0000f0",
    },
    {
      shape: [
        [1, 1],
        [1, 0],
        [1, 0],
      ],
      color: "#0000f0",
    },
    {
      shape: [
        [1, 1, 1],
        [0, 0, 1],
      ],
      color: "#0000f0",
    },
    {
      shape: [
        [0, 1],
        [0, 1],
        [1, 1],
      ],
      color: "#0000f0",
    },
  ],
  L: [
    {
      shape: [
        [0, 0, 1],
        [1, 1, 1],
      ],
      color: "#f0a000",
    },
    {
      shape: [
        [1, 0],
        [1, 0],
        [1, 1],
      ],
      color: "#f0a000",
    },
    {
      shape: [
        [1, 1, 1],
        [1, 0, 0],
      ],
      color: "#f0a000",
    },
    {
      shape: [
        [1, 1],
        [0, 1],
        [0, 1],
      ],
      color: "#f0a000",
    },
  ],
};

const PIECE_TYPES = Object.keys(TETRIS_PIECES);

export const StarBackground = () => {
  const [tetrisPieces, setTetrisPieces] = useState([]);

  useEffect(() => {
    generateTetrisPieces();

    const handleResize = () => {
      generateTetrisPieces();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateTetrisPieces = () => {
    const screenWidth = window.innerWidth;
    const gameColumns = 10;
    const columnWidth = Math.min(screenWidth / gameColumns, 80);
    const totalGameWidth = gameColumns * columnWidth;
    const startX = (screenWidth - totalGameWidth) / 2;

    const newPieces = [];
    let pieceId = 0;

    const numberOfGames = Math.max(1, Math.floor(screenWidth / 400)); // Una partida cada 400px

    for (let game = 0; game < numberOfGames; game++) {
      const gameOffset = (game * screenWidth) / numberOfGames;

      PIECE_TYPES.forEach((pieceType, typeIndex) => {
        const rotations = TETRIS_PIECES[pieceType];

        for (let instance = 0; instance < 2; instance++) {
          const rotationIndex = Math.floor(Math.random() * rotations.length);
          const piece = rotations[rotationIndex];

          const columnPosition = Math.floor(Math.random() * (gameColumns - 4));
          const xPosition =
            ((gameOffset + columnPosition * columnWidth) / screenWidth) * 100;

          newPieces.push({
            id: pieceId++,
            type: pieceType,
            shape: piece.shape,
            color: piece.color,
            x: Math.max(0, Math.min(95, xPosition)),
            blockSize: Math.random() * 4 + 20, // 20-24px para mejor visibilidad
            delay: Math.random() * 20 + typeIndex * 1.5 + instance * 0.5,
            animationDuration: Math.random() * 4 + 10, // 10-14s
            // Opacidad más alta: rango entre 0.9 y 1.0
            opacity: Math.random() * 0.1 + 0.9,
          });
        }
      });
    }

    // Mezclar las piezas para distribución más natural
    for (let i = newPieces.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newPieces[i], newPieces[j]] = [newPieces[j], newPieces[i]];
    }

    setTetrisPieces(newPieces);
  };

  const renderTetrisPiece = (piece) => {
    const { shape, color, blockSize } = piece;
    const rows = shape.length;
    const cols = shape[0].length;
    const width = cols * blockSize;
    const height = rows * blockSize;

    return (
      <div
        className="tetris-piece"
        style={{
          position: "relative",
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        {shape.map((rowArr, rIdx) =>
          rowArr.map((cell, cIdx) => {
            if (!cell) return null;
            return (
              <div
                key={`${rIdx}-${cIdx}`}
                className="tetris-block"
                style={{
                  position: "absolute",
                  top: `${rIdx * blockSize}px`,
                  left: `${cIdx * blockSize}px`,
                  width: `${blockSize}px`,
                  height: `${blockSize}px`,
                  backgroundColor: color,
                }}
              />
            );
          })
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {tetrisPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-tetris-fall"
          style={{
            left: piece.x + "%",
            top: "-100px",
            animationDelay: piece.delay + "s",
            animationDuration: piece.animationDuration + "s",
            opacity: piece.opacity,
          }}
        >
          {renderTetrisPiece(piece)}
        </div>
      ))}
    </div>
  );
};

export default StarBackground;
