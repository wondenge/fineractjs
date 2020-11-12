

import ApiClient from '../ApiClient';

/**
 * The PutResourceTypeResourceIdNotesNoteIdRequest model module.
 * @module model/PutResourceTypeResourceIdNotesNoteIdRequest
 * @version 1.0
 */
class PutResourceTypeResourceIdNotesNoteIdRequest {
    /**
     * Constructs a new <code>PutResourceTypeResourceIdNotesNoteIdRequest</code>.
     * PutResourceTypeResourceIdNotesNoteIdRequest
     * @alias module:model/PutResourceTypeResourceIdNotesNoteIdRequest
     */
    constructor() { 
        
        PutResourceTypeResourceIdNotesNoteIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutResourceTypeResourceIdNotesNoteIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutResourceTypeResourceIdNotesNoteIdRequest} obj Optional instance to populate.
     * @return {module:model/PutResourceTypeResourceIdNotesNoteIdRequest} The populated <code>PutResourceTypeResourceIdNotesNoteIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutResourceTypeResourceIdNotesNoteIdRequest();

            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} note
 */
PutResourceTypeResourceIdNotesNoteIdRequest.prototype['note'] = undefined;






export default PutResourceTypeResourceIdNotesNoteIdRequest;

