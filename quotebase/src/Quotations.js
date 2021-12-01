import { useSelector } from "react-redux";

export function Quotations() {
    const selectedAuthor = useSelector(state => state.selectedAuthor);
    const selectedQuotations = useSelector(state => state.quotations[state.selectedAuthor]);


    if (selectedAuthor) {
        return (
            <div id="quotations-panel" className="panel">
                <h2>Quotations from {selectedAuthor}</h2>
                <ul id="quotations-list">
                {selectedQuotations.map((quotation, i) => <li key={i}>{quotation}</li>)}
                </ul>
            </div>
        );
    }
    else {
        return null;
    }
  }