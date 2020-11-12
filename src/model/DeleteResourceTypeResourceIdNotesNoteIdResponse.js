

import ApiClient from '../ApiClient';

/**
 * The DeleteResourceTypeResourceIdNotesNoteIdResponse model module.
 * @module model/DeleteResourceTypeResourceIdNotesNoteIdResponse
 * @version 1.0
 */
class DeleteResourceTypeResourceIdNotesNoteIdResponse {
    /**
     * Constructs a new <code>DeleteResourceTypeResourceIdNotesNoteIdResponse</code>.
     * DeleteResourceTypeResourceIdNotesNoteIdResponse
     * @alias module:model/DeleteResourceTypeResourceIdNotesNoteIdResponse
     */
    constructor() { 
        
        DeleteResourceTypeResourceIdNotesNoteIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteResourceTypeResourceIdNotesNoteIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteResourceTypeResourceIdNotesNoteIdResponse} obj Optional instance to populate.
     * @return {module:model/DeleteResourceTypeResourceIdNotesNoteIdResponse} The populated <code>DeleteResourceTypeResourceIdNotesNoteIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteResourceTypeResourceIdNotesNoteIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
DeleteResourceTypeResourceIdNotesNoteIdResponse.prototype['resourceId'] = undefined;






export default DeleteResourceTypeResourceIdNotesNoteIdResponse;

