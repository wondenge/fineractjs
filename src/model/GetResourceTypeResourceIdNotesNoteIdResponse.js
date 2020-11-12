

import ApiClient from '../ApiClient';
import GetNotesNoteType from './GetNotesNoteType';

/**
 * The GetResourceTypeResourceIdNotesNoteIdResponse model module.
 * @module model/GetResourceTypeResourceIdNotesNoteIdResponse
 * @version 1.0
 */
class GetResourceTypeResourceIdNotesNoteIdResponse {
    /**
     * Constructs a new <code>GetResourceTypeResourceIdNotesNoteIdResponse</code>.
     * GetResourceTypeResourceIdNotesNoteIdResponse
     * @alias module:model/GetResourceTypeResourceIdNotesNoteIdResponse
     */
    constructor() { 
        
        GetResourceTypeResourceIdNotesNoteIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetResourceTypeResourceIdNotesNoteIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetResourceTypeResourceIdNotesNoteIdResponse} obj Optional instance to populate.
     * @return {module:model/GetResourceTypeResourceIdNotesNoteIdResponse} The populated <code>GetResourceTypeResourceIdNotesNoteIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetResourceTypeResourceIdNotesNoteIdResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('noteType')) {
                obj['noteType'] = GetNotesNoteType.constructFromObject(data['noteType']);
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('createdById')) {
                obj['createdById'] = ApiClient.convertToType(data['createdById'], 'Number');
            }
            if (data.hasOwnProperty('createdByUsername')) {
                obj['createdByUsername'] = ApiClient.convertToType(data['createdByUsername'], 'String');
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
            }
            if (data.hasOwnProperty('updatedById')) {
                obj['updatedById'] = ApiClient.convertToType(data['updatedById'], 'Number');
            }
            if (data.hasOwnProperty('updatedByUsername')) {
                obj['updatedByUsername'] = ApiClient.convertToType(data['updatedByUsername'], 'String');
            }
            if (data.hasOwnProperty('updatedOn')) {
                obj['updatedOn'] = ApiClient.convertToType(data['updatedOn'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetResourceTypeResourceIdNotesNoteIdResponse.prototype['id'] = undefined;

/**
 * @member {Number} clientId
 */
GetResourceTypeResourceIdNotesNoteIdResponse.prototype['clientId'] = undefined;

/**
 * @member {module:model/GetNotesNoteType} noteType
 */
GetResourceTypeResourceIdNotesNoteIdResponse.prototype['noteType'] = undefined;

/**
 * @member {String} note
 */
GetResourceTypeResourceIdNotesNoteIdResponse.prototype['note'] = undefined;

/**
 * @member {Number} createdById
 */
GetResourceTypeResourceIdNotesNoteIdResponse.prototype['createdById'] = undefined;

/**
 * @member {String} createdByUsername
 */
GetResourceTypeResourceIdNotesNoteIdResponse.prototype['createdByUsername'] = undefined;

/**
 * @member {Date} createdOn
 */
GetResourceTypeResourceIdNotesNoteIdResponse.prototype['createdOn'] = undefined;

/**
 * @member {Number} updatedById
 */
GetResourceTypeResourceIdNotesNoteIdResponse.prototype['updatedById'] = undefined;

/**
 * @member {String} updatedByUsername
 */
GetResourceTypeResourceIdNotesNoteIdResponse.prototype['updatedByUsername'] = undefined;

/**
 * @member {Date} updatedOn
 */
GetResourceTypeResourceIdNotesNoteIdResponse.prototype['updatedOn'] = undefined;






export default GetResourceTypeResourceIdNotesNoteIdResponse;

