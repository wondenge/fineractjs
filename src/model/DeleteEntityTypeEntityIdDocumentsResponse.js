

import ApiClient from '../ApiClient';

/**
 * The DeleteEntityTypeEntityIdDocumentsResponse model module.
 * @module model/DeleteEntityTypeEntityIdDocumentsResponse
 * @version 1.0
 */
class DeleteEntityTypeEntityIdDocumentsResponse {
    /**
     * Constructs a new <code>DeleteEntityTypeEntityIdDocumentsResponse</code>.
     * DeleteEntityTypeEntityIdDocumentsResponse
     * @alias module:model/DeleteEntityTypeEntityIdDocumentsResponse
     */
    constructor() { 
        
        DeleteEntityTypeEntityIdDocumentsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteEntityTypeEntityIdDocumentsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteEntityTypeEntityIdDocumentsResponse} obj Optional instance to populate.
     * @return {module:model/DeleteEntityTypeEntityIdDocumentsResponse} The populated <code>DeleteEntityTypeEntityIdDocumentsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteEntityTypeEntityIdDocumentsResponse();

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
DeleteEntityTypeEntityIdDocumentsResponse.prototype['resourceId'] = undefined;

/**
 * @member {Object} changes
 */
DeleteEntityTypeEntityIdDocumentsResponse.prototype['changes'] = undefined;

/**
 * @member {String} resourceIdentifier
 */
DeleteEntityTypeEntityIdDocumentsResponse.prototype['resourceIdentifier'] = undefined;






export default DeleteEntityTypeEntityIdDocumentsResponse;

