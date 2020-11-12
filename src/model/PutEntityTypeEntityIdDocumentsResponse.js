

import ApiClient from '../ApiClient';

/**
 * The PutEntityTypeEntityIdDocumentsResponse model module.
 * @module model/PutEntityTypeEntityIdDocumentsResponse
 * @version 1.0
 */
class PutEntityTypeEntityIdDocumentsResponse {
    /**
     * Constructs a new <code>PutEntityTypeEntityIdDocumentsResponse</code>.
     * PutEntityTypeEntityIdDocumentsResponse
     * @alias module:model/PutEntityTypeEntityIdDocumentsResponse
     */
    constructor() { 
        
        PutEntityTypeEntityIdDocumentsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutEntityTypeEntityIdDocumentsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutEntityTypeEntityIdDocumentsResponse} obj Optional instance to populate.
     * @return {module:model/PutEntityTypeEntityIdDocumentsResponse} The populated <code>PutEntityTypeEntityIdDocumentsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutEntityTypeEntityIdDocumentsResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = ApiClient.convertToType(data['changes'], Object);
            }
            if (data.hasOwnProperty('resourceIdentifier')) {
                obj['resourceIdentifier'] = ApiClient.convertToType(data['resourceIdentifier'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutEntityTypeEntityIdDocumentsResponse.prototype['resourceId'] = undefined;

/**
 * @member {Object} changes
 */
PutEntityTypeEntityIdDocumentsResponse.prototype['changes'] = undefined;

/**
 * @member {String} resourceIdentifier
 */
PutEntityTypeEntityIdDocumentsResponse.prototype['resourceIdentifier'] = undefined;






export default PutEntityTypeEntityIdDocumentsResponse;

