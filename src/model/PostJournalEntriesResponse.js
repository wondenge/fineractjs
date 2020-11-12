

import ApiClient from '../ApiClient';

/**
 * The PostJournalEntriesResponse model module.
 * @module model/PostJournalEntriesResponse
 * @version 1.0
 */
class PostJournalEntriesResponse {
    /**
     * Constructs a new <code>PostJournalEntriesResponse</code>.
     * PostJournalEntriesResponse
     * @alias module:model/PostJournalEntriesResponse
     */
    constructor() { 
        
        PostJournalEntriesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostJournalEntriesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostJournalEntriesResponse} obj Optional instance to populate.
     * @return {module:model/PostJournalEntriesResponse} The populated <code>PostJournalEntriesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostJournalEntriesResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 1
 * @member {Number} officeId
 */
PostJournalEntriesResponse.prototype['officeId'] = undefined;

/**
 * RS9MCISID4WK1ZM
 * @member {String} transactionId
 */
PostJournalEntriesResponse.prototype['transactionId'] = undefined;






export default PostJournalEntriesResponse;

