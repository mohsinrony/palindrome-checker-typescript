import React, { useState, ChangeEvent } from "react";

const PalindromeChecker: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [isPalindrome, setIsPalindrome] = useState<boolean | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInput(inputValue);
    setIsPalindrome(checkPalindrome(inputValue));
  };

  const checkPalindrome = (str: string) => {
    const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="card-title">PALINDROME CHECKER</h2>
        <p>
          A 'Palindrome' is a word, phrase, or sequence that reads the same
          backwards as forwards e.g. madam or nurses run or 123321.
        </p>
        <input
          type="text"
          className="form-control"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter a word, number, or phrase"
        />
        {isPalindrome !== null && (
          <p
            className={`alert ${
              isPalindrome ? "alert-success" : "alert-danger"
            }`}
          >
            <label className="result">
              {isPalindrome
                ? `${input} is a palindrome!`
                : `${input} is not a palindrome.`}
            </label>
          </p>
        )}
      </div>
      <footer className="text-center">&copy; Mohsin Rony</footer>
    </div>
  );
};

export default PalindromeChecker;
