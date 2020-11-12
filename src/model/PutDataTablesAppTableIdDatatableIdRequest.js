  

import ApiClient from '../ApiClient';

/**
 * The PutDataTablesAppTableIdDatatableIdRequest model module.
 * @module model/PutDataTablesAppTableIdDatatableIdRequest
 * @version 1.0
 */
class PutDataTablesAppTableIdDatatableIdRequest {
    /**
     * Constructs a new <code>PutDataTablesAppTableIdDatatableIdRequest</code>.
     * PutDataTablesAppTableIdDatatableIdRequest
     * @alias module:model/PutDataTablesAppTableIdDatatableIdRequest
     */
    constructor() { 
        
        PutDataTablesAppTableIdDatatableIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutDataTablesAppTableIdDatatableIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutDataTablesAppTableIdDatatableIdRequest} obj Optional instance to populate.
     * @return {module:model/PutDataTablesAppTableIdDatatableIdRequest} The populated <code>PutDataTablesAppTableIdDatatableIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutDataTablesAppTableIdDatatableIdRequest();

            if (data.hasOwnProperty('DateOfBirth')) {
                obj['DateOfBirth'] = ApiClient.convertToType(data['DateOfBirth'], 'String');
            }
            if (data.hasOwnProperty('Education_cdHighest')) {
                obj['Education_cdHighest'] = ApiClient.convertToType(data['Education_cdHighest'], 'Number');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('OtherNotes')) {
                obj['OtherNotes'] = ApiClient.convertToType(data['OtherNotes'], 'String');
            }
            if (data.hasOwnProperty('PointsScore')) {
                obj['PointsScore'] = ApiClient.convertToType(data['PointsScore'], 'Number');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} DateOfBirth
 */
PutDataTablesAppTableIdDatatableIdRequest.prototype['DateOfBirth'] = undefined;

/**
 * @member {Number} Education_cdHighest
 */
PutDataTablesAppTableIdDatatableIdRequest.prototype['Education_cdHighest'] = undefined;

/**
 * @member {String} Name
 */
PutDataTablesAppTableIdDatatableIdRequest.prototype['Name'] = undefined;

/**
 * @member {String} OtherNotes
 */
PutDataTablesAppTableIdDatatableIdRequest.prototype['OtherNotes'] = undefined;

/**
 * @member {Number} PointsScore
 */
PutDataTablesAppTableIdDatatableIdRequest.prototype['PointsScore'] = undefined;

/**
 * @member {String} dateFormat
 */
PutDataTablesAppTableIdDatatableIdRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} locale
 */
PutDataTablesAppTableIdDatatableIdRequest.prototype['locale'] = undefined;






export default PutDataTablesAppTableIdDatatableIdRequest;

