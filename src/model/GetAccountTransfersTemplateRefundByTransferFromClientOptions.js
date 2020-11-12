  

import ApiClient from '../ApiClient';

/**
 * The GetAccountTransfersTemplateRefundByTransferFromClientOptions model module.
 * @module model/GetAccountTransfersTemplateRefundByTransferFromClientOptions
 * @version 1.0
 */
class GetAccountTransfersTemplateRefundByTransferFromClientOptions {
    /**
     * Constructs a new <code>GetAccountTransfersTemplateRefundByTransferFromClientOptions</code>.
     * @alias module:model/GetAccountTransfersTemplateRefundByTransferFromClientOptions
     */
    constructor() { 
        
        GetAccountTransfersTemplateRefundByTransferFromClientOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountTransfersTemplateRefundByTransferFromClientOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountTransfersTemplateRefundByTransferFromClientOptions} obj Optional instance to populate.
     * @return {module:model/GetAccountTransfersTemplateRefundByTransferFromClientOptions} The populated <code>GetAccountTransfersTemplateRefundByTransferFromClientOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountTransfersTemplateRefundByTransferFromClientOptions();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetAccountTransfersTemplateRefundByTransferFromClientOptions.prototype['id'] = undefined;

/**
 * @member {String} displayName
 */
GetAccountTransfersTemplateRefundByTransferFromClientOptions.prototype['displayName'] = undefined;

/**
 * @member {Number} officeId
 */
GetAccountTransfersTemplateRefundByTransferFromClientOptions.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetAccountTransfersTemplateRefundByTransferFromClientOptions.prototype['officeName'] = undefined;






export default GetAccountTransfersTemplateRefundByTransferFromClientOptions;

