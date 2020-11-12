

import ApiClient from '../ApiClient';

/**
 * The GetAccountTransfersTemplateRefundByTransferFromOffice model module.
 * @module model/GetAccountTransfersTemplateRefundByTransferFromOffice
 * @version 1.0
 */
class GetAccountTransfersTemplateRefundByTransferFromOffice {
    /**
     * Constructs a new <code>GetAccountTransfersTemplateRefundByTransferFromOffice</code>.
     * @alias module:model/GetAccountTransfersTemplateRefundByTransferFromOffice
     */
    constructor() { 
        
        GetAccountTransfersTemplateRefundByTransferFromOffice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountTransfersTemplateRefundByTransferFromOffice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountTransfersTemplateRefundByTransferFromOffice} obj Optional instance to populate.
     * @return {module:model/GetAccountTransfersTemplateRefundByTransferFromOffice} The populated <code>GetAccountTransfersTemplateRefundByTransferFromOffice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountTransfersTemplateRefundByTransferFromOffice();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('nameDecorated')) {
                obj['nameDecorated'] = ApiClient.convertToType(data['nameDecorated'], 'String');
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'Number');
            }
            if (data.hasOwnProperty('openingDate')) {
                obj['openingDate'] = ApiClient.convertToType(data['openingDate'], 'Date');
            }
            if (data.hasOwnProperty('hierarchy')) {
                obj['hierarchy'] = ApiClient.convertToType(data['hierarchy'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetAccountTransfersTemplateRefundByTransferFromOffice.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetAccountTransfersTemplateRefundByTransferFromOffice.prototype['name'] = undefined;

/**
 * @member {String} nameDecorated
 */
GetAccountTransfersTemplateRefundByTransferFromOffice.prototype['nameDecorated'] = undefined;

/**
 * @member {Number} externalId
 */
GetAccountTransfersTemplateRefundByTransferFromOffice.prototype['externalId'] = undefined;

/**
 * @member {Date} openingDate
 */
GetAccountTransfersTemplateRefundByTransferFromOffice.prototype['openingDate'] = undefined;

/**
 * @member {String} hierarchy
 */
GetAccountTransfersTemplateRefundByTransferFromOffice.prototype['hierarchy'] = undefined;






export default GetAccountTransfersTemplateRefundByTransferFromOffice;

