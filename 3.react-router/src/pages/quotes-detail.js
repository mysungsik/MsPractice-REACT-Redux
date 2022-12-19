import { useParams } from "react-router-dom";
import QuotesDetailComponent from "../components/quotes-detail/quotes-detail";

const QuotesDetail = () => {
  const params = useParams(); //  /:quotesId
  const quotesId = params.quotesId;

  return (
    <div>
      <QuotesDetailComponent quotesId={quotesId} />
    </div>
  );
};
export default QuotesDetail;
