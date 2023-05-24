export const structureTemplate = (S) =>
    S.list()
        .title('Calendar Template')
        .items([
                S.listItem()
                    .title('Site Settings')
                    .child(
                        S.document()
                            .title('Site Settings')
                            .schemaType('siteSettings')
                            .documentId('siteSettings')
                    ),
                S.divider(),
                S.listItem()
                    .title('Pages')
                    .child(
                        S.list()
                          .title('Pages')
                          . items([
                            S.listItem()
                            .title('Main Page')
                            .child(
                                S.document()
                                    .title('Main Page')
                                    .schemaType('mainPage')
                                    .documentId('mainPage')
                            ),
                          ])
                    ),
                S.divider(),
                ...S.documentTypeListItems().filter(item => !['siteSettings', 'social', 'mainPage', 'media.tag'].includes(item.getId()))
            ])