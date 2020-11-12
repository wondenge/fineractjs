

import ApiClient from '../ApiClient';

/**
 * The PostAccountTransfersRefundByTransferRequest model module.
 * @module model/PostAccountTransfersRefundByTransferRequest
 * @version 1.0
 */
class PostAccountTransfersRefundByTransferRequest {
    /**
     * Constructs a new <code>PostAccountTransfersRefundByTransferRequest</code>.
     * PostAccountTransfersRefundByTransferRequest
     * @alias module:model/PostAccountTransfersRefundByTransferRequest
     */
    constructor() { 
        
        PostAccountTransfersRefundByTransferRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostAccountTransfersRefundByTransferRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostAccountTransfersRefundByTransferRequest} obj Optional instance to populate.
     * @return {module:model/PostAccountTransfersRefundByTransferRequest} The populated <code>PostAccountTransfersRefundByTransferRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostAccountTransfersRefundByTransferRequest();

            if (data.hasOwnProperty('fromAccountId')) {
                obj['fromAccountId'] = ApiClient.convertToType(data['fromAccountId'], 'Number');
            }
            if (data.hasOwnProperty('fromAccountType')) {
                obj['fromAccountType'] = ApiClient.convertToType(data['fromAccountType'], 'Number');
            }
            if (data.hasOwnProperty('toOfficeId')) {
                obj['toOfficeId'] = ApiClient.convertToType(data['toOfficeId'], 'Number');
            }
            if (data.hasOwnProperty('toClientId')) {
                obj['toClientId'] = ApiClient.convertToType(data['toClientId'], 'Number');
            }
            if (data.hasOwnProperty('toAccountType')) {
                obj['toAccountType'] = ApiClient.convertToType(data['toAccountType'], 'Number');
            }
            if (data.hasOwnProperty('toAccountId')) {
                obj['toAccountId'] = ApiClient.convertToType(data['toAccountId'], 'Number');
            }
            if (data.hasOwnProperty('transferAmount')) {
                obj['transferAmount'] = ApiClient.convertToType(data['transferAmount'], 'Number');
            }
            if (data.hasOwnProperty('transferDate')) {
                obj['transferDate'] = ApiClient.convertToType(data['transferDate'], 'String');
            }
            if (data.hasOwnProperty('transferDescription')) {
                obj['transferDescription'] = ApiClient.convertToType(data['transferDescription'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('fromClientId')) {
                obj['fromClientId'] = ApiClient.convertToType(data['fromClientId'], 'Number');
            }
            if (data.hasOwnProperty('fromOfficeId')) {
                obj['fromOfficeId'] = ApiClient.convertToType(data['fromOfficeId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} fromAccountId
 */
PostAccountTransfersRefundByTransferRequest.prototype['fromAccountId'] = undefined;

/**
 * @member {Number} fromAccountType
 */
PostAccountTransfersRefundByTransferRequest.prototype['fromAccountType'] = undefined;

/**
 * @member {Number} toOfficeId
 */
PostAccountTransfersRefundByTransferRequest.prototype['toOfficeId'] = undefined;

/**
 * @member {Number} toClientId
 */
PostAccountTransfersRefundByTransferRequest.prototype['toClientId'] = undefined;

/**
 * @member {Number} toAccountType
 */
PostAccountTransfersRefundByTransferRequest.prototype['toAccountType'] = undefined;

/**
 * @member {Number} toAccountId
 */
PostAccountTransfersRefundByTransferRequest.prototype['toAccountId'] = undefined;

/**
 * @member {Number} transferAmount
 */
PostAccountTransfersRefundByTransferRequest.prototype['transferAmount'] = undefined;

/**
 * @member {String} transferDate
 */
PostAccountTransfersRefundByTransferRequest.prototype['transferDate'] = undefined;

/**
 * @member {String} transferDescription
 */
PostAccountTransfersRefundByTransferRequest.prototype['transferDescription'] = undefined;

/**
 * @member {String} locale
 */
PostAccountTransfersRefundByTransferRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostAccountTransfersRefundByTransferRequest.prototype['dateFormat'] = undefined;

/**
 * @member {Number} fromClientId
 */
PostAccountTransfersRefundByTransferRequest.prototype['fromClientId'] = undefined;

/**
 * @member {Number} fromOfficeId
 */
PostAccountTransfersRefundByTransferRequest.prototype['fromOfficeId'] = undefined;






export default PostAccountTransfersRefundByTransferRequest;

