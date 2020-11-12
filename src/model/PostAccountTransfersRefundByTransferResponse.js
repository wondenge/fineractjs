

import ApiClient from '../ApiClient';

/**
 * The PostAccountTransfersRefundByTransferResponse model module.
 * @module model/PostAccountTransfersRefundByTransferResponse
 * @version 1.0
 */
class PostAccountTransfersRefundByTransferResponse {
    /**
     * Constructs a new <code>PostAccountTransfersRefundByTransferResponse</code>.
     * PostAccountTransfersRefundByTransferResponse
     * @alias module:model/PostAccountTransfersRefundByTransferResponse
     */
    constructor() { 
        
        PostAccountTransfersRefundByTransferResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostAccountTransfersRefundByTransferResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostAccountTransfersRefundByTransferResponse} obj Optional instance to populate.
     * @return {module:model/PostAccountTransfersRefundByTransferResponse} The populated <code>PostAccountTransfersRefundByTransferResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostAccountTransfersRefundByTransferResponse();

            if (data.hasOwnProperty('savingsId')) {
                obj['savingsId'] = ApiClient.convertToType(data['savingsId'], 'Number');
            }
            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} savingsId
 */
PostAccountTransfersRefundByTransferResponse.prototype['savingsId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostAccountTransfersRefundByTransferResponse.prototype['resourceId'] = undefined;






export default PostAccountTransfersRefundByTransferResponse;

