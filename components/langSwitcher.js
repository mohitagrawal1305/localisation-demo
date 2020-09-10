import Router from 'next/router'

export default function langSwitcher( { selected } ) {

    const onLanguageChange = ( e ) => {

        if( selected !== e.target.value ) {
    
          document.cookie = `lang=${e.target.value}; path=/`;
    
          Router.reload(window.location.pathname);
    
        }
    
      };
    return (
        <select name="language" value = { selected } onChange = { onLanguageChange } >
            <option value="0">* Select Language</option>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
        </select>
    );
};