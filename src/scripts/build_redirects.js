
import * as fs from 'fs';
import db from '../../static/db.json' assert {type: "json"};
const sourcePath = './static/_redirects'; 

const main = async () => {
    
    try {
        
        const data = db.data.map(post => { 
            const postDate = new Date(post.date);
            const day = postDate.getDate();
            let month = (postDate.getDate() + 1).toString();
            month = month.length < 2 ? ('0' + month) : month; 
            const year = postDate.getFullYear();

            const oldSlug = `/${year}/${month}/${day}/${post.slug}`;
            const newSlug = `/media-centre/${post.slug}`;

			return `${oldSlug} ${newSlug}`; 
		});

        fs.writeFileSync(`${sourcePath}`, data.join("\n") ); 

    } catch (error) {
        console.error(error);
    }
  
}

main()

