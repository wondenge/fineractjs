

import ApiClient from '../ApiClient';

/**
 * The PostProvisioningEntriesRequest model module.
 * @module model/PostProvisioningEntriesRequest
 * @version 1.0
 */
class PostProvisioningEntriesRequest {
    /**
     * Constructs a new <code>PostProvisioningEntriesRequest</code>.
     * PostProvisioningEntriesRequest
     * @alias module:model/PostProvisioningEntriesRequest
     */
    constructor() { 
        
        PostProvisioningEntriesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostProvisioningEntriesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostProvisioningEntriesRequest} obj Optional instance to populate.
     * @return {module:model/PostProvisioningEntriesRequest} The populated <code>PostProvisioningEntriesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostProvisioningEntriesRequest();

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('createjournalentries')) {
                obj['createjournalentries'] = ApiClient.convertToType(data['createjournalentries'], 'String');
            }
            if (data.hasOwnProperty('provisioningentry')) {
                obj['provisioningentry'] = ApiClient.convertToType(data['provisioningentry'], 'String');
            }
            if (data.hasOwnProperty('entries')) {
                obj['entries'] = ApiClient.convertToType(data['entries'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} date
 */
PostProvisioningEntriesRequest.prototype['date'] = undefined;

/**
 * @member {String} locale
 */
PostProvisioningEntriesRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostProvisioningEntriesRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} createjournalentries
 */
PostProvisioningEntriesRequest.prototype['createjournalentries'] = undefined;

/**
 * @member {String} provisioningentry
 */
PostProvisioningEntriesRequest.prototype['provisioningentry'] = undefined;

/**
 * @member {String} entries
 */
PostProvisioningEntriesRequest.prototype['entries'] = undefined;






export default PostProvisioningEntriesRequest;

