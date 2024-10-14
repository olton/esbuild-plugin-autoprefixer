import fs from 'fs'
import {
    compile,
    serialize,
    stringify,
    middleware,
    prefixer,
} from 'stylis'

export default options => {
    return {
        name: 'CSS Autoprefixer',
        setup(build) {
            build.onResolve({ filter: /.\.css$/ }, (args) => {
                // console.log(args);
            })
            const preprocessStyles = (styles) =>
                serialize(
                    compile(styles),
                    middleware([
                        prefixer,
                        stringify
                    ])
                )

            build.onLoad({ filter: /.\.css$/ }, async (args) => {
                let cssContent = await fs.promises.readFile(args.path, 'utf-8')
                let modifiedCssContent = preprocessStyles(cssContent)

                return {
                    contents: modifiedCssContent,
                    loader: 'css',
                }
            })
        },
    }
}