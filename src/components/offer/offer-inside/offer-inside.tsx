interface Props {
  goods: string[];
}

function OfferInside({ goods }: Props) {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {goods.map((good) => (
          <li className="offer__inside-item" key={good}>{good}</li>
        ))}
      </ul>
    </div>
  );
}

export default OfferInside;
