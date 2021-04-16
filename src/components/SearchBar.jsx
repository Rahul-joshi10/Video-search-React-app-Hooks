import React, { useState } from 'react';


const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = event => {
        event.preventDefault();
        onFormSubmit(term);
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input
                        type="text"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;


// class SearchBar extends React.Component {

//     state = { term: '' };

//     onFormSubmit = e => {
//         e.preventDefault();
//         this.props.onFormSubmit(this.state.term);
//     };

//     onInputChange = event => {
//         this.setState({ term: event.target.value });
//     };

//     render() {
//         return (
//             <div className="search-bar ui segment">
//                 <form className="ui form" onSubmit={this.onFormSubmit}>
//                     <div className="field">
//                         <label>Video Search</label>
//                         <input
//                             type="text"
//                             onChange={this.onInputChange}
//                             value={this.state.term} />
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }

