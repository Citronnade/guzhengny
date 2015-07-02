orion.pages.addTemplate(
    {
        template: 'about',
        name: 'contact',
        layout: 'layout',
        description: 'About us page'
    },
    {
        content: orion.attribute('froala', {
            label: 'General description'
        })
    }
);
