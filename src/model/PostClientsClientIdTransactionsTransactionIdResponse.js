  

import ApiClient from '../ApiClient';

/**
 * The PostClientsClientIdTransactionsTransactionIdResponse model module.
 * @module model/PostClientsClientIdTransactionsTransactionIdResponse
 * @version 1.0
 */
class PostClientsClientIdTransactionsTransactionIdResponse {
    /**
     * Constructs a new <code>PostClientsClientIdTransactionsTransactionIdResponse</code>.
     * PostClientsClientIdTransactionsTransactionIdResponse
     * @alias module:model/PostClientsClientIdTransactionsTransactionIdResponse
     */
    constructor() { 
        
        PostClientsClientIdTransactionsTransactionIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostClientsClientIdTransactionsTransactionIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostClientsClientIdTransactionsTransactionIdResponse} obj Optional instance to populate.
     * @return {module:model/PostClientsClientIdTransactionsTransactionIdResponse} The populated <code>PostClientsClientIdTransactionsTransactionIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostClientsClientIdTransactionsTransactionIdResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PostClientsClientIdTransactionsTransactionIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PostClientsClientIdTransactionsTransactionIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostClientsClientIdTransactionsTransactionIdResponse.prototype['resourceId'] = undefined;






export default PostClientsClientIdTransactionsTransactionIdResponse;

