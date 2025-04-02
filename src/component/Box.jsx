import React from 'react';

const Box = (props) => {
  // 결과 메시지 설정
  let resultMessage = "";

  if (props.result === "win") {
    resultMessage = "win";  // 유저가 이기면 win
  } else if (props.result === "lose") {
    resultMessage = "lose";  // 유저가 지면 lose
  } else if (props.result === "tie") {
    resultMessage = "tie";  // 비기면 tie
  }

  return (
    <div 
      className="box" 
      style={{ 
        borderColor: props.borderColor, // borderColor를 동적으로 적용
      }}
    >
      <h1>{props.title}</h1>
      {props.item ? (
        <>
          <img className="item-img" src={props.item.img} alt={props.item.name} />
          <h2>{props.item.name}</h2>
        </>
      ) : (
        <h2>선택을 해주세요!</h2> // 선택이 없을 경우 표시할 텍스트
      )}
      <h3>{resultMessage}</h3> {/* win / lose / tie 메시지 표시 */}
    </div>
  );
};

export default Box;
