

import ApiClient from '../ApiClient';

/**
 * The GetAccountTransfersTemplateRefundByTransferToClient model module.
 * @module model/GetAccountTransfersTemplateRefundByTransferToClient
 * @version 1.0
 */
class GetAccountTransfersTemplateRefundByTransferToClient {
    /**
     * Constructs a new <code>GetAccountTransfersTemplateRefundByTransferToClient</code>.
     * @alias module:model/GetAccountTransfersTemplateRefundByTransferToClient
     */
    constructor() { 
        
        GetAccountTransfersTemplateRefundByTransferToClient.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountTransfersTemplateRefundByTransferToClient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountTransfersTemplateRefundByTransferToClient} obj Optional instance to populate.
     * @return {module:model/GetAccountTransfersTemplateRefundByTransferToClient} The populated <code>GetAccountTransfersTemplateRefundByTransferToClient</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountTransfersTemplateRefundByTransferToClient();

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
GetAccountTransfersTemplateRefundByTransferToClient.prototype['id'] = undefined;

/**
 * @member {String} displayName
 */
GetAccountTransfersTemplateRefundByTransferToClient.prototype['displayName'] = undefined;

/**
 * @member {Number} officeId
 */
GetAccountTransfersTemplateRefundByTransferToClient.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetAccountTransfersTemplateRefundByTransferToClient.prototype['officeName'] = undefined;






export default GetAccountTransfersTemplateRefundByTransferToClient;

