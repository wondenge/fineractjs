

import ApiClient from '../ApiClient';
import GetNotesNoteType from './GetNotesNoteType';

/**
 * The GetResourceTypeResourceIdNotesResponse model module.
 * @module model/GetResourceTypeResourceIdNotesResponse
 * @version 1.0
 */
class GetResourceTypeResourceIdNotesResponse {
    /**
     * Constructs a new <code>GetResourceTypeResourceIdNotesResponse</code>.
     * GetResourceTypeResourceIdNotesResponse
     * @alias module:model/GetResourceTypeResourceIdNotesResponse
     */
    constructor() { 
        
        GetResourceTypeResourceIdNotesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetResourceTypeResourceIdNotesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetResourceTypeResourceIdNotesResponse} obj Optional instance to populate.
     * @return {module:model/GetResourceTypeResourceIdNotesResponse} The populated <code>GetResourceTypeResourceIdNotesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetResourceTypeResourceIdNotesResponse();

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
GetResourceTypeResourceIdNotesResponse.prototype['id'] = undefined;

/**
 * @member {Number} clientId
 */
GetResourceTypeResourceIdNotesResponse.prototype['clientId'] = undefined;

/**
 * @member {module:model/GetNotesNoteType} noteType
 */
GetResourceTypeResourceIdNotesResponse.prototype['noteType'] = undefined;

/**
 * @member {String} note
 */
GetResourceTypeResourceIdNotesResponse.prototype['note'] = undefined;

/**
 * @member {Number} createdById
 */
GetResourceTypeResourceIdNotesResponse.prototype['createdById'] = undefined;

/**
 * @member {String} createdByUsername
 */
GetResourceTypeResourceIdNotesResponse.prototype['createdByUsername'] = undefined;

/**
 * @member {Date} createdOn
 */
GetResourceTypeResourceIdNotesResponse.prototype['createdOn'] = undefined;

/**
 * @member {Number} updatedById
 */
GetResourceTypeResourceIdNotesResponse.prototype['updatedById'] = undefined;

/**
 * @member {String} updatedByUsername
 */
GetResourceTypeResourceIdNotesResponse.prototype['updatedByUsername'] = undefined;

/**
 * @member {Date} updatedOn
 */
GetResourceTypeResourceIdNotesResponse.prototype['updatedOn'] = undefined;






export default GetResourceTypeResourceIdNotesResponse;

