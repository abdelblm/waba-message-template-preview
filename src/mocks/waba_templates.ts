import type { WabaTemplate } from '@/api/waba_templates'

const digi: WabaTemplate[] = [
  {
    id: 1,
    category: 'AUTO_REPLY',
    components: [
      {
        format: 'IMAGE',
        type: 'HEADER',
      },
      {
        text: 'Bienvenue au Service Client Digishare Maroc\n\nPour mieux vous servir, contactez nous sur WhatsApp pour :\n- Réclamations\n- Besoin en formation\n- Demandes de documents et preuve de paiement\n- Demande de visite commerciale (TMS, Fleet Management, ERP, Géolocalisation, Robot Planificateur)',
        type: 'BODY',
      },
      {
        text: 'Digishare : Solutions de Gestion du transport et des tâches',
        type: 'FOOTER',
      },
      {
        buttons: [
          {
            phone_number: '+212702040003',
            text: 'Téléphone',
            type: 'PHONE_NUMBER',
          },
          {
            text: 'Digishare.biz',
            type: 'URL',
            url: 'http://www.digishare.biz/',
          },
        ],
        type: 'BUTTONS',
      },
    ],
    language: 'fr',
    name: 'digishare_transportation_task_management',
    rejected_reason: 'NONE',
    status: 'approved',
  },
  {
    id: 2,
    category: 'PAYMENT_UPDATE',
    components: [
      {
        text: 'What do you want to do now? {{1}}',
        type: 'BODY',
      },
      {
        text: 'your-footer-text',
        type: 'FOOTER',
      },
      {
        buttons: [
          {
            text: 'OK',
            type: 'QUICK_REPLY',
          },
          {
            text: 'NO',
            type: 'QUICK_REPLY',
          },
        ],
        type: 'BUTTONS',
      },
    ],
    language: 'en_US',
    name: 'template_name_example12222222',
    rejected_reason: 'NONE',
    status: 'approved',
  },
  {
    id: 3,
    category: 'TRANSACTIONAL',
    components: [
      {
        example: {
          header_handle: [
            'https://scontent.whatsapp.net/v/t61.29466-34/161408016_458127609246208_410526266262209657_n.pdf?ccb=1-7&_nc_sid=57045b&_nc_ohc=VMv1r5x88bkAX83PoPr&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&oh=01_AdQomt2tRIEZ8RlIZZdNOfAirdXdVrTABT-X_cz91GsHLA&oe=637D1BEF',
          ],
        },
        format: 'DOCUMENT',
        type: 'HEADER',
      },
      {
        example: {
          body_text: [['Hello you']],
        },
        text: '**** {{1}}.',
        type: 'BODY',
      },
      {
        buttons: [
          {
            text: 'نعم أنا موافق',
            type: 'QUICK_REPLY',
          },
          {
            text: 'لست موافقا',
            type: 'QUICK_REPLY',
          },
        ],
        type: 'BUTTONS',
      },
    ],
    language: 'en',
    name: 'file_text_2buttons_yes_no_arabe',
    rejected_reason: 'NONE',
    status: 'approved',
  },
  {
    id: 4,
    category: 'PAYMENT_UPDATE',
    components: [
      {
        example: {
          header_handle: [
            'https://scontent.whatsapp.net/v/t61.29466-34/156008152_711958123355075_432827877579246587_n.png?ccb=1-7&_nc_sid=57045b&_nc_ohc=xFrakpLps9AAX8r5yJm&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&oh=01_AdRYjEYYXNlshAq6Q17cuSIjssogBs_Zreh_4_JoG9bTPQ&oe=637E89F2',
          ],
        },
        format: 'IMAGE',
        type: 'HEADER',
      },
      {
        example: {
          body_text: [['LAPTOP']],
        },
        text: 'Please find attached your cotation for {{1}}.',
        type: 'BODY',
      },
      {
        buttons: [
          {
            text: 'ACCEPTED - ORDER OK',
            type: 'QUICK_REPLY',
          },
          {
            text: 'REFUSED-ORDER NOT OK',
            type: 'QUICK_REPLY',
          },
        ],
        type: 'BUTTONS',
      },
    ],
    language: 'en',
    name: 'adil_test',
    rejected_reason: 'NONE',
    status: 'approved',
  },
  {
    id: 5,
    category: 'AUTO_REPLY',
    components: [
      {
        format: 'IMAGE',
        type: 'HEADER',
      },
      {
        text: 'Bienvenue au Service Client Digishare Maroc\n\nPour mieux vous servir, contactez nous sur WhatsApp pour :\n- Réclamations\n- Besoin en formation\n- Demandes de documents et preuve de paiement\n- Demande de visite commerciale (CRM, Fleet-ERP, Workflow Manager, Site Marchand et Applications de livraison)',
        type: 'BODY',
      },
      {
        text: "Digishare - Promoteur d'écosystèmes collaboratifs",
        type: 'FOOTER',
      },
      {
        buttons: [
          {
            phone_number: '+212702040003',
            text: 'Téléphone',
            type: 'PHONE_NUMBER',
          },
          {
            text: 'Digishare.biz',
            type: 'URL',
            url: 'http://www.digishare.biz/',
          },
        ],
        type: 'BUTTONS',
      },
    ],
    language: 'fr',
    name: 'digishare_service_client',
    rejected_reason: 'NONE',
    status: 'approved',
  },
  {
    id: 6,
    category: 'AUTO_REPLY',
    components: [
      {
        example: {
          header_handle: [
            'https://scontent.whatsapp.net/v/t61.29466-34/181012364_3005590576360317_5505058554724827163_n.png?ccb=1-7&_nc_sid=57045b&_nc_ohc=fp7u79OvnMMAX_cb0DB&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&oh=01_AdRIZozxjI48RiOQMjkQT7ANKyJGSQF4J6IujDQK48vtaQ&oe=63806AC9',
          ],
        },
        format: 'IMAGE',
        type: 'HEADER',
      },
      {
        text: 'Bienvenue au Service Client Digishare Maroc\n\nPour mieux vous servir, contactez nous sur WhatsApp pour :\n- Réclamations\n- Besoin en formation\n- Demandes de documents et preuve de paiement\n- Demande de visite commerciale (CRM, Fleet-ERP, Workflow Manager, Site Marchand et Applications de livraison)',
        type: 'BODY',
      },
      {
        text: "Digishare - Promoteur d'écosystèmes collaboratifs",
        type: 'FOOTER',
      },
      {
        buttons: [
          {
            phone_number: '+212702040003',
            text: 'Téléphone',
            type: 'PHONE_NUMBER',
          },
          {
            text: 'Digishare.biz',
            type: 'URL',
            url: 'http://www.digishare.biz/',
          },
        ],
        type: 'BUTTONS',
      },
    ],
    language: 'fr',
    name: 'digishare_service_client_2',
    rejected_reason: 'NONE',
    status: 'approved',
  },
  {
    id: 7,
    category: 'MARKETING',
    components: [
      {
        example: {
          body_text: [['New Promotion']],
        },
        text: '**** {{1}}. ',
        type: 'BODY',
      },
      {
        example: {
          header_handle: [
            'https://png.pngtree.com/png-clipart/20191123/original/pngtree-yes-and-now-sign-vector-man-face-with-emotions-approval-and-png-image_5194831.jpg',
          ],
        },
        format: 'IMAGE',
        type: 'HEADER',
      },
      {
        text: 'Powered by ITINAREA',
        type: 'FOOTER',
      },
      {
        buttons: [
          {
            example: ['https://www.digishare.biz/'],
            text: 'Accéder au site WEB',
            type: 'URL',
            url: '{{1}}',
          },
          {
            phone_number: '+212671791198',
            text: 'Appelez',
            type: 'PHONE_NUMBER',
          },
        ],
        type: 'BUTTONS',
      },
    ],
    language: 'fr',
    name: 'image_text_footer_2buttons_url_call_french',
    rejected_reason: null,
    status: 'created',
  },
]
const taaminy: WabaTemplate[] = [
  {
    id: 11,
    category: 'TRANSACTIONAL',
    components: [
      {
        example: {
          body_text: [['Ci-joint votre devis']],
        },
        text: '**** {{1}}',
        type: 'BODY',
      },
      {
        example: {
          header_handle: [
            'https://itb.itinarea.com/storage/static/DIGISHARE%20-%20Produits.pdf',
          ],
        },
        format: 'DOCUMENT',
        type: 'HEADER',
      },
      {
        buttons: [
          {
            text: "Oui, j'accepte",
            type: 'QUICK_REPLY',
          },
          {
            text: "Non, je n'accepte pas",
            type: 'QUICK_REPLY',
          },
        ],
        type: 'BUTTONS',
      },
    ],
    language: 'en',
    name: 'file_text_2buttons_yes_no_french',
    rejected_reason: 'NONE',
    status: 'approved',
  },
  {
    id: 12,
    category: 'TRANSACTIONAL',
    components: [
      {
        example: {
          body_text: [['votre devis']],
        },
        text: '**** {{1}}',
        type: 'BODY',
      },
      {
        example: {
          header_handle: [
            'https://itb.itinarea.com/storage/static/DIGISHARE%20-%20Produits.pdf',
          ],
        },
        format: 'DOCUMENT',
        type: 'HEADER',
      },
      {
        buttons: [
          {
            text: 'نعم أنا موافق',
            type: 'QUICK_REPLY',
          },
          {
            text: 'لست موافقا',
            type: 'QUICK_REPLY',
          },
        ],
        type: 'BUTTONS',
      },
    ],
    language: 'en',
    name: 'file_text_2buttons_yes_no_arabe',
    rejected_reason: 'NONE',
    status: 'approved',
  },
  {
    id: 13,
    category: 'MARKETING',
    components: [
      {
        example: {
          body_text: [['Mr. Aziz', '(5 à 10% de remise)']],
        },
        text: 'Bonjour {{1}} 😊.\nContactez nous pour profiter des toutes nouvelles promotions {{2}}.',
        type: 'BODY',
      },
      {
        example: {
          header_handle: [
            'https://commons.wikimedia.org/wiki/File:Sunflower_from_Silesia2.jpg',
          ],
        },
        format: 'IMAGE',
        type: 'HEADER',
      },
      {
        text: 'Taaminy. Votre partenaire en assurance',
        type: 'FOOTER',
      },
      {
        buttons: [
          {
            example: ['https://www.taaminy.ma'],
            text: 'Lien de la promo',
            type: 'URL',
            url: '{{1}}',
          },
          {
            phone_number: '+212671791198',
            text: 'Appelez nous',
            type: 'PHONE_NUMBER',
          },
        ],
        type: 'BUTTONS',
      },
    ],
    language: 'en',
    name: 'image_text_footer_2buttons_url_call_french',
    rejected_reason: null,
    status: 'created',
  },
]
const innodis: WabaTemplate[] = [
  {
    id: 21,
    category: 'TRANSACTIONAL',
    components: [
      {
        example: {
          body_text: [['votre devis']],
        },
        text: '**** {{1}}',
        type: 'BODY',
      },
      {
        example: {
          header_handle: [
            'https://itb.itinarea.com/storage/static/DIGISHARE%20-%20Produits.pdf',
          ],
        },
        format: 'DOCUMENT',
        type: 'HEADER',
      },
      {
        buttons: [
          {
            text: 'نعم أنا موافق',
            type: 'QUICK_REPLY',
          },
          {
            text: 'لست موافقا',
            type: 'QUICK_REPLY',
          },
        ],
        type: 'BUTTONS',
      },
    ],
    language: 'en',
    name: 'file_text_2buttons_yes_no_arabe',
    rejected_reason: 'NONE',
    status: 'approved',
  },
  {
    id: 22,
    category: 'TRANSACTIONAL',
    components: [
      {
        example: {
          body_text: [
            ['Ci-joint le devis demandé, voulez vous passer commande'],
          ],
        },
        text: '**** {{1}}',
        type: 'BODY',
      },
      {
        example: {
          header_handle: [
            'https://itb.itinarea.com/storage/static/DIGISHARE%20-%20Produits.pdf',
          ],
        },
        format: 'DOCUMENT',
        type: 'HEADER',
      },
      {
        buttons: [
          {
            text: "Oui, j'accepte",
            type: 'QUICK_REPLY',
          },
          {
            text: "Non, je n'accepte pas",
            type: 'QUICK_REPLY',
          },
        ],
        type: 'BUTTONS',
      },
    ],
    language: 'fr',
    name: 'file_text_2buttons_yes_no_french',
    rejected_reason: 'NONE',
    status: 'approved',
  },
]

export const waba_templates = [...digi, ...taaminy, ...innodis]
