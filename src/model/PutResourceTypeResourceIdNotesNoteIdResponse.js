

import ApiClient from '../ApiClient';
import PutNotesChanges from './PutNotesChanges';

/**
 * The PutResourceTypeResourceIdNotesNoteIdResponse model module.
 * @module model/PutResourceTypeResourceIdNotesNoteIdResponse
 * @version 1.0
 */
class PutResourceTypeResourceIdNotesNoteIdResponse {
    /**
     * Constructs a new <code>PutResourceTypeResourceIdNotesNoteIdResponse</code>.
     * PutResourceTypeResourceIdNotesNoteIdResponse
     * @alias module:model/PutResourceTypeResourceIdNotesNoteIdResponse
     */
    constructor() { 
        
        PutResourceTypeResourceIdNotesNoteIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutResourceTypeResourceIdNotesNoteIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutResourceTypeResourceIdNotesNoteIdResponse} obj Optional instance to populate.
     * @return {module:model/PutResourceTypeResourceIdNotesNoteIdResponse} The populated <code>PutResourceTypeResourceIdNotesNoteIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutResourceTypeResourceIdNotesNoteIdResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutNotesChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PutResourceTypeResourceIdNotesNoteIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PutResourceTypeResourceIdNotesNoteIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} resourceId
 */
PutResourceTypeResourceIdNotesNoteIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutNotesChanges} changes
 */
PutResourceTypeResourceIdNotesNoteIdResponse.prototype['changes'] = undefined;






export default PutResourceTypeResourceIdNotesNoteIdResponse;

