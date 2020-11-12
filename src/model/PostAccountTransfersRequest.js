

import ApiClient from '../ApiClient';

/**
 * The PostAccountTransfersRequest model module.
 * @module model/PostAccountTransfersRequest
 * @version 1.0
 */
class PostAccountTransfersRequest {
    /**
     * Constructs a new <code>PostAccountTransfersRequest</code>.
     * PostAccountTransfersRequest
     * @alias module:model/PostAccountTransfersRequest
     */
    constructor() { 
        
        PostAccountTransfersRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostAccountTransfersRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostAccountTransfersRequest} obj Optional instance to populate.
     * @return {module:model/PostAccountTransfersRequest} The populated <code>PostAccountTransfersRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostAccountTransfersRequest();

            if (data.hasOwnProperty('fromOfficeId')) {
                obj['fromOfficeId'] = ApiClient.convertToType(data['fromOfficeId'], 'Number');
            }
            if (data.hasOwnProperty('fromClientId')) {
                obj['fromClientId'] = ApiClient.convertToType(data['fromClientId'], 'Number');
            }
            if (data.hasOwnProperty('fromAccountType')) {
                obj['fromAccountType'] = ApiClient.convertToType(data['fromAccountType'], 'Number');
            }
            if (data.hasOwnProperty('fromAccountId')) {
                obj['fromAccountId'] = ApiClient.convertToType(data['fromAccountId'], 'Number');
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
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('transferDate')) {
                obj['transferDate'] = ApiClient.convertToType(data['transferDate'], 'String');
            }
            if (data.hasOwnProperty('transferAmount')) {
                obj['transferAmount'] = ApiClient.convertToType(data['transferAmount'], 'Number');
            }
            if (data.hasOwnProperty('transferDescription')) {
                obj['transferDescription'] = ApiClient.convertToType(data['transferDescription'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} fromOfficeId
 */
PostAccountTransfersRequest.prototype['fromOfficeId'] = undefined;

/**
 * @member {Number} fromClientId
 */
PostAccountTransfersRequest.prototype['fromClientId'] = undefined;

/**
 * @member {Number} fromAccountType
 */
PostAccountTransfersRequest.prototype['fromAccountType'] = undefined;

/**
 * @member {Number} fromAccountId
 */
PostAccountTransfersRequest.prototype['fromAccountId'] = undefined;

/**
 * @member {Number} toOfficeId
 */
PostAccountTransfersRequest.prototype['toOfficeId'] = undefined;

/**
 * @member {Number} toClientId
 */
PostAccountTransfersRequest.prototype['toClientId'] = undefined;

/**
 * @member {Number} toAccountType
 */
PostAccountTransfersRequest.prototype['toAccountType'] = undefined;

/**
 * @member {Number} toAccountId
 */
PostAccountTransfersRequest.prototype['toAccountId'] = undefined;

/**
 * @member {String} dateFormat
 */
PostAccountTransfersRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} locale
 */
PostAccountTransfersRequest.prototype['locale'] = undefined;

/**
 * @member {String} transferDate
 */
PostAccountTransfersRequest.prototype['transferDate'] = undefined;

/**
 * @member {Number} transferAmount
 */
PostAccountTransfersRequest.prototype['transferAmount'] = undefined;

/**
 * @member {String} transferDescription
 */
PostAccountTransfersRequest.prototype['transferDescription'] = undefined;






export default PostAccountTransfersRequest;

