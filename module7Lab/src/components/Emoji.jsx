// Exercise: 7.3.1

import { useEmojiContext } from '../context/EmojiContext';

function Emoji() {
  const { isHappy, setIsHappy } = useEmojiContext();

  return (
    <div>
      <span role="img" aria-label="emoji">{isHappy ? '😀' : '😞'}</span>
      <button onClick={() => setIsHappy(!isHappy)}>Change Mood</button>
    </div>
  );
}

export default Emoji;