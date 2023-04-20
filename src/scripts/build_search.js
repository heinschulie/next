
import * as fs from 'fs';
import axios from "axios";
import db from '../../static/db.json' assert {type: "json"};

const sourcePath = './static/db.json'; 
const homeSourcePath = './src/lib/services/home.json'; 
const searchSourcePath = './src/lib/services/search.json'; 

// Note --> This technique is described here: https://www.hawksworx.com/blog/adding-search-to-a-jamstack-site/
// and this function is adapted from here: https://github.com/philhawksworth/hawksworx.com/blob/8c96ba2541c8fd6fe6f521cdb5e17848c231636c/src/site/_filters/squash.js

const INCOMING_HOOK_POST_ID = process.env.INCOMING_HOOK_BODY; 

const squash = (text) => {

    // all lower case, please
    let content = text.toLowerCase();
  
    // remove all html elements and new lines
    // regex from here --> https://codepen.io/chriscoyier/pen/jOWJqXP?editors=1111
    var re = /(<([^>]+)>)/gi;
    let plain = content.replace(re, ' ');
 
    // remove duplicated words
    var words = plain.split(' ');
    var deduped = [...(new Set(words))];
    var dedupedStr = deduped.join(' ')
  
    // remove short and less meaningful words
    var result = dedupedStr.replace(/\b(\.|\,|the|a|an|and|am|you|I|to|if|of|off|me|my|on|in|it|is|at|as|we|do|be|has|but|was|so|no|not|or|up|for)\b/gi, '');
    //remove newlines, and punctuation
    result = result.replace(/\.|\,|\“|\”|\?|-|—|\n/g, ' ');
    //remove repeated spaces
    result = result.replace(/[ ]{2,}/g, ' ');

    return result;

}

const formatDate = (date) => {
    const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dev'
	];
    const d = new Date(date);
    return `${d.getDate()} ${ months[ d.getMonth() ] }, ${ d.getFullYear() - 2000}`;
}

const base = 'https://changeexchange.studio/wp-json/wp/v2';
const authorDefault = 'BrightRock';
const illustrationDefault = 'https://res.cloudinary.com/iamme/image/upload/v1653823283/brightrock/br_logo2.jpg';
const amountOfPostsToFetch = 100; 

const main = async () => {
    
    try {
        // const newPosts = await axios.get(`${ base }/posts?_embed=true&per_page=${amountOfPostsToFetch}&categories=2798,2821,2793&after=${db.lastCalled}`);
        // const response = { data: [ ...db.data, ...newPosts.data ] };

        const just_for_you = 2793;
        const press_releases = 2821;
        const news = 2798;
        const rugby = 3091;
        const CSCategories = `${just_for_you},${press_releases},${news},${rugby}`; 

        let url = `${ base }/posts?_embed=true&per_page=${amountOfPostsToFetch}&categories=${CSCategories}`;

        let lastCalled = db && db.lastCalled ? db.lastCalled : '2015-12-31T00:00:00.000Z';

        const previouslyOnTheCS2015 = `${ url }&after=2015-01-01T00:00:00.000Z&before=2015-12-31T00:00:00.000Z`;
        const previouslyOnTheCS2016 = `${ url }&after=2016-01-01T00:00:00.000Z&before=2016-12-31T00:00:00.000Z`;
        const previouslyOnTheCS2017 = `${ url }&after=2017-01-01T00:00:00.000Z&before=2017-12-31T00:00:00.000Z`;
        const previouslyOnTheCS2018 = `${ url }&after=2018-01-01T00:00:00.000Z&before=2018-12-31T00:00:00.000Z`;
        const previouslyOnTheCS2019 = `${ url }&after=2019-01-01T00:00:00.000Z&before=2019-12-31T00:00:00.000Z`;
        const previouslyOnTheCS2020 = `${ url }&after=2020-01-01T00:00:00.000Z&before=2020-12-31T00:00:00.000Z`;
        const previouslyOnTheCS2021 = `${ url }&after=2021-01-01T00:00:00.000Z&before=2021-12-31T00:00:00.000Z`;
        const previouslyOnTheCS2022 = `${ url }&after=2022-01-01T00:00:00.000Z&before=2022-12-31T00:00:00.000Z`;
        const posts2015 = await axios.get(`${ previouslyOnTheCS2015 }`);
        const posts2016 = await axios.get(`${ previouslyOnTheCS2016 }`);
        const posts2017 = await axios.get(`${ previouslyOnTheCS2017 }`);
        const posts2018 = await axios.get(`${ previouslyOnTheCS2018 }`);
        const posts2019 = await axios.get(`${ previouslyOnTheCS2019 }`);
        const posts2020 = await axios.get(`${ previouslyOnTheCS2020 }`);
        const posts2021 = await axios.get(`${ previouslyOnTheCS2021 }`);
        const posts2022 = await axios.get(`${ previouslyOnTheCS2022 }`);
        
        // console.log("HERE: 2");
        // const newPosts = await axios.get(`${ base }/posts?_embed=true&per_page=${amountOfPostsToFetch}&categories=
        //     ${just_for_you},
        //     ${press_releases},
        //     ${news},
        //     ${rugby}&after=${lastCalled}`);
        
        
        let updatedPost;
        
        // if(INCOMING_HOOK_POST_ID) {
        //     const requestForUpdatedPost = await axios.get(`${ base }/posts/${INCOMING_HOOK_POST_ID[0]}`); 
        //     updatedPost = requestForUpdatedPost.data; 
        // } 
        
        const response = { data: [ 
                ...posts2015.data,
                ...posts2016.data,
                ...posts2017.data,
                ...posts2018.data,
                ...posts2019.data,
                ...posts2020.data,
                ...posts2021.data,
                ...posts2022.data,
                ...db.data 
            ]
            .filter(p => !!p && p.id) 
            .sort((a,b) => +(new Date(b.date)) - +(new Date(a.date)))
        };

        // const response = { data: [ ...newPosts.data, ...db.data ].filter(p => !!p && p.id) };
 
        console.log("AMOUNT OF POSTS: ", response.data.length)
        // if(!!updatedPost) {
        //     response.data = response.data.map((post, i) => {
        //         return !!post.id && post.id.toString() === updatedPost.id.toString() ? updatedPost : post
        //     }); 
        // }
        
        const data = response.data
        .sort((a, b) => +(new Date(b.date)) - +(new Date(a)))
        .map(post => { 
            const ACF = post.ACF;
            const id = post.id;
            const author = !!post._embedded["author"] ? post._embedded["author"][0].name : authorDefault;
            const heading = post.title.rendered;
            const excerpt = post.excerpt.rendered;
            const slug = post.slug;
            const date = formatDate( post.date );
            const content = post.content.rendered.replace(/\<p\>\<\/p\>/g, '');

            // const categories = !!post._embedded['wp:term'] ? post._embedded['wp:term'][0].map(cat => cat.slug): [];
            const fullCategories = !!post._embedded['wp:term'] ? post._embedded['wp:term'][0] : false;
            const categories = !!fullCategories ? fullCategories.map(cat => cat.slug): [];
            const tags = !!post._embedded['wp:term'] ? post._embedded['wp:term'][1].map(tag => tag.slug): [];

            const relatedPosts = !!fullCategories ? 
                response.data
                        .filter(p => {
                            return !!p._embedded['wp:term'] && 
                                p._embedded['wp:term'][0].some(cat => fullCategories.some(fc => fc.id === cat.id)) &&
                                p.slug !== slug;
                        }) 
                        .slice(0, 4)
                        .map(rp => rp.slug) 
                : [];

			// const illustration = !!post._embedded['wp:featuredmedia'] && !!post._embedded['wp:featuredmedia'][0] && !!post._embedded['wp:featuredmedia'][0].source_url ? post._embedded['wp:featuredmedia'][0].source_url : illustrationDefault;  
            let illustration = !!post._embedded['wp:featuredmedia'] && !!post._embedded['wp:featuredmedia'][0] && !!post._embedded['wp:featuredmedia'][0].source_url ? post._embedded['wp:featuredmedia'][0].source_url : illustrationDefault;  
		    illustration = illustration === 'https://changeexchange.studio/wp-content/uploads/2022/03/Screenshot-2022-05-28-at-11.40.20.png' ? illustrationDefault : illustration;

            const searchString = squash(`${ heading } ${ author } ${ excerpt } ${ content } ${ categories.join(' ') } ${ tags.join(' ') }`); 
			const newPost = {
                ACF,
                id,
                date,
                author,
				heading,
				excerpt,
				illustration,
				illustrationBackup: illustrationDefault,
				slug,
                content,
				categories,
				tags,
                relatedPosts,
                searchString
			}
			return newPost; 
		})
        // .reverse()

        fs.writeFileSync(`${sourcePath}`, JSON.stringify( { lastCalled: (new Date()).toISOString(), data: response.data } ) );
        fs.writeFileSync(`${homeSourcePath}`, JSON.stringify( data.slice(0,16) ) );
        fs.writeFileSync(`${searchSourcePath}`, JSON.stringify( data ) );    

    } catch (error) {
        console.error(error);
    }
  
}

main()















// import * as fs from 'fs';
// import axios from "axios";

// const homeSourcePath = './src/lib/services/home.json'; 
// const searchSourcePath = './src/lib/services/search.json'; 

// // Note --> This technique is described here: https://www.hawksworx.com/blog/adding-search-to-a-jamstack-site/
// // and this function is adapted from here: https://github.com/philhawksworth/hawksworx.com/blob/8c96ba2541c8fd6fe6f521cdb5e17848c231636c/src/site/_filters/squash.js
// const squash = (text) => {

//     // all lower case, please
//     let content = text.toLowerCase();
  
//     // remove all html elements and new lines
//     // regex from here --> https://codepen.io/chriscoyier/pen/jOWJqXP?editors=1111
//     var re = /(<([^>]+)>)/gi;
//     let plain = content.replace(re, ' ');
 
//     // remove duplicated words
//     var words = plain.split(' ');
//     var deduped = [...(new Set(words))];
//     var dedupedStr = deduped.join(' ')
  
//     // remove short and less meaningful words
//     var result = dedupedStr.replace(/\b(\.|\,|the|a|an|and|am|you|I|to|if|of|off|me|my|on|in|it|is|at|as|we|do|be|has|but|was|so|no|not|or|up|for)\b/gi, '');
//     //remove newlines, and punctuation
//     result = result.replace(/\.|\,|\“|\”|\?|-|—|\n/g, ' ');
//     //remove repeated spaces
//     result = result.replace(/[ ]{2,}/g, ' ');

//     return result;

// }

// const base = 'https://changeexchange.studio/wp-json/wp/v2';
// // const base = 'http://34.71.182.217/wp-json/wp/v2';
// const authorDefault = 'BrightRock';
// // const illustrationDefault = 'https://changeexchange.co.za/assets/lovechange.png';
// const illustrationDefault = 'https://res.cloudinary.com/iamme/image/upload/v1653823283/brightrock/br_logo2.jpg';
// const amountOfPostsToFetch = 100; 

// const main = async () => {
    
//     try {
//         const response = await axios.get(`${ base }/posts?_embed=true&per_page=${amountOfPostsToFetch}&categories=2798,2821,2793`);
//         console.log("RESPONSE LENGTH: ", response.data.length);
        
//         const data = response.data.map(post => { 
//             const id = post.id;
//             const author = !!post._embedded["author"] ? post._embedded["author"][0].name : authorDefault;
//             const heading = post.title.rendered;
//             const excerpt = post.excerpt.rendered;
//             const slug = post.slug;
//             const content = post.content.rendered;
//             const categories = !!post._embedded['wp:term'] ? post._embedded['wp:term'][0].map(cat => cat.slug): [];
//             const tags = !!post._embedded['wp:term'] ? post._embedded['wp:term'][1].map(tag => tag.slug): [];
// 			// const illustration = !!post._embedded['wp:featuredmedia'] && !!post._embedded['wp:featuredmedia'][0] && !!post._embedded['wp:featuredmedia'][0].source_url ? post._embedded['wp:featuredmedia'][0].source_url : illustrationDefault;  
            
//             let illustration = !!post._embedded['wp:featuredmedia'] && !!post._embedded['wp:featuredmedia'][0] && !!post._embedded['wp:featuredmedia'][0].source_url ? post._embedded['wp:featuredmedia'][0].source_url : illustrationDefault;  
// 		    illustration = illustration === 'https://changeexchange.studio/wp-content/uploads/2022/03/Screenshot-2022-05-28-at-11.40.20.png' ? illustrationDefault : illustration;

//             const searchString = squash(`${ heading } ${ author } ${ excerpt } ${ content } ${ categories.join(' ') } ${ tags.join(' ') }`); 
// 			const newPost = {
//                 id,
//                 author,
// 				heading,
// 				excerpt,
// 				illustration,
// 				illustrationBackup: illustrationDefault,
// 				slug,
//                 content,
// 				categories,
// 				tags,
//                 searchString
// 			}
// 			return newPost; 
// 		}).sort((a: ))

//         fs.writeFileSync(`${searchSourcePath}`, JSON.stringify( data ) );    

//     } catch (error) {
//         console.error(error);
//     }
  
// }

// main()

